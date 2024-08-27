"use server";

import { lucia } from "@/lib/auth";
import { hash } from "@node-rs/argon2";
import { signupFormSchema } from "../zod-schema/signupFormSchema";
import { generateIdFromEntropySize } from "lucia";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersTable } from "@/db/schema/users";
import { cookies } from "next/headers";
import { otpHandler } from "@/lib/otpHandler";
import { FormState } from "@/types";

export async function signup(formData: FormData): Promise<FormState> {
  const validatedFields = signupFormSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      message: "Invalid credentials",
      type: "error",
    };
  }

  const { password, email } = validatedFields.data;

  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, email.toLocaleLowerCase()),
  });

  if (user) {
    return {
      message:
        "This email address is not available. Please use a different email to complete your registration.",
      type: "error",
    };
  }

  const passwordHash = await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  const userId = generateIdFromEntropySize(10);

  try {
    await db.insert(usersTable).values({
      id: userId,
      email,
      passwordHash,
    });
  } catch {
    return {
      type: "error",
      message: "Failed to register. Please try again.",
    };
  }

  try {
    const verificationCode = await otpHandler.generateOTP(userId, email);
    await otpHandler.sendOTP(email, verificationCode);
  } catch {
    return {
      type: "error",
      message: "Failed to send verification code. Please try again.",
    };
  }

  try {
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch {
    return {
      type: "error",
      message:
        "Failed to authenticate. Please try to login with your credentials.",
    };
  }

  return { message: "User registered", type: "success" };
}
