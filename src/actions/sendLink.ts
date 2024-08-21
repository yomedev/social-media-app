"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema/users";
import {
  createPasswordResetToken,
  sendPasswordResetLink,
} from "@/lib/passwordResetToken";
import { FormState } from "@/types";
import { emailFormSchema } from "@/zod-schema/emailFormSchema";
import { eq } from "drizzle-orm";

export async function sendLink(formData: FormData): Promise<FormState> {
  const validated = emailFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validated.success) {
    return {
      type: "error",
      message: "Invalid email",
    };
  }

  const { email } = validated.data;

  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, email),
  });

  if (!user || !user.passwordHash) {
    return {
      message: "Invalid email",
      type: "error",
    };
  }

  const verificationToken = await createPasswordResetToken(user.id);
  const verificationLink =
    "http://localhost:3000/reset-password?token=" + verificationToken;

  try {
    await sendPasswordResetLink(email, verificationLink);
  } catch {
    return {
      message: "Failed to send link",
      type: "error",
    };
  }

  return {
    type: "success",
    message: "Link sent to your email",
  };
}
