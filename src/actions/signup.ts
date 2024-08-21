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

export async function signup(formData: FormData) {
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
      message: "User with that username already exists",
      type: "error",
    };
  }

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  const userId = generateIdFromEntropySize(10);

  await db.insert(usersTable).values({
    id: userId,
    email,
    passwordHash,
  });

  const verificationCode = await otpHandler.generateOTP(userId, email);

  await otpHandler.sendOTP(email, verificationCode)

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return { message: "User registered", type: "success" };
}
