"use server";

import { db } from "@/db";
import { loginFormSchema } from "../zod-schema/loginFormSchema";
import { usersTable } from "@/db/schema/users";
import { eq } from "drizzle-orm";
import { verify } from "@node-rs/argon2";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const validatedFields = loginFormSchema.safeParse(
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

  if (!user) {
    return {
      message: "Invalid credentials",
      type: "error",
    };
  }

  const validPassword = await verify(user.passwordHash, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  if (!validPassword) {
    return {
      message: "Invalid credentials",
      type: "error",
    };
  }

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return {
    message: "User loged in",
    type: "success",
  };
}
