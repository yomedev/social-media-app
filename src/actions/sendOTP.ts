"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema/users";
import { emailFormSchema } from "@/zod-schema/emailFormSchema";
import { eq } from "drizzle-orm";
import { otpHandler } from "../lib/otpHandler";
import { FormState } from "@/types";

export async function sendOTP(formData: FormData): Promise<FormState> {
  const validated = emailFormSchema.safeParse({
    email: formData.get("email") as string,
  });

  if (!validated.success) {
    return {
      message: "Invalid email",
      type: "error",
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

  const otpCode = await otpHandler.generateOTP(user.id, user.email);

  try {
    await otpHandler.sendOTP(email, otpCode);
  } catch (error) {
    return {
      message: "Failed to send OTP",
      type: "error",
    };
  }

  return {
    message: "OTP sent",
    type: "success",
  };
}
