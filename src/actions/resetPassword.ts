"use server";

import { db } from "@/db";
import { passwordResetTokensTable } from "@/db/schema/password-reset-tokens";
import { usersTable } from "@/db/schema/users";
import { FormState } from "@/types";
import { resetPasswordFormSchema } from "@/zod-schema/resetPasswordFormSchema";
import { hash } from "@node-rs/argon2";
import { eq } from "drizzle-orm";
import { isWithinExpirationDate } from "oslo";
import { sha256 } from "oslo/crypto";
import { encodeHex } from "oslo/encoding";

export async function resetPassword(
  token: string,
  formData: FormData
): Promise<FormState> {
  const validated = resetPasswordFormSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validated.success) {
    return { type: "error", message: "Invalid password." };
  }

  const { password } = validated.data;

  const tokenHash = encodeHex(await sha256(new TextEncoder().encode(token)));
  const tokenData = await db.query.passwordResetTokensTable.findFirst({
    where: eq(passwordResetTokensTable.tokenHash, tokenHash),
  });

  if (!tokenData || !isWithinExpirationDate(tokenData.expiresAt)) {
    return { type: "error", message: "Invalid password reset token." };
  }

  await db
    .delete(passwordResetTokensTable)
    .where(eq(passwordResetTokensTable.tokenHash, tokenHash));

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  await db
    .update(usersTable)
    .set({
      passwordHash,
    })
    .where(eq(usersTable.id, tokenData.userId));

  return {
    type: "success",
    message: "Your password has been reset.",
  };
}
