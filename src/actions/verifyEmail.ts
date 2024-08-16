"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema/users";
import { lucia } from "@/lib/auth";
import { verifyCode } from "@/lib/verifyCode";
import { verificationCodeSchema } from "@/zod-schema/verificationCodeSchema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export async function verifyEmail(formData: FormData) {
  const validated = verificationCodeSchema.safeParse({
    verificationCode: formData.get("verificationCode") as string,
  });

  if (!validated.success) {
    return {
      message: "Invalid verification code.",
      type: "error",
    };
  }

  const { verificationCode } = validated.data;

  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    return {
      message: "Unauthorized",
      type: "error",
    };
  }

  const { user } = await lucia.validateSession(sessionId);

  if (!user) {
    return {
      message: "Unauthorized",
      type: "error",
    };
  }

  const isVerified = await verifyCode(user, verificationCode);

  if (!isVerified) {
    return {
      message: "Invalid verification code.",
      type: "error",
    };
  }

  await lucia.invalidateUserSessions(user.id);
  await db
    .update(usersTable)
    .set({ emailVerified: true })
    .where(eq(usersTable.id, user.id));

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return {
    message: "Email verified.",
    type: "success",
  };
}
