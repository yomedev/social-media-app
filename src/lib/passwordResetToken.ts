import { db } from "@/db";
import { passwordResetTokensTable } from "@/db/schema/password-reset-tokens";
import { eq } from "drizzle-orm";
import { generateIdFromEntropySize } from "lucia";
import { createDate, TimeSpan } from "oslo";
import { sha256 } from "oslo/crypto";
import { encodeHex } from "oslo/encoding";
import { getEmailOPtions, transporter } from "./nodemailer";

export async function createPasswordResetToken(
  userId: string
): Promise<string> {
  await db
    .delete(passwordResetTokensTable)
    .where(eq(passwordResetTokensTable.userId, userId));

  const tokenId = generateIdFromEntropySize(25);
  const tokenHash = encodeHex(await sha256(new TextEncoder().encode(tokenId)));

  await db.insert(passwordResetTokensTable).values({
    tokenHash,
    userId,
    expiresAt: createDate(new TimeSpan(2, "h")),
  });
  return tokenId;
}

export async function sendPasswordResetLink(email: string, link: string ) {
  const options = getEmailOPtions({
    email,
    subject: "Reset password link",
    html: `<a href="${link}">Click here to reset your password</a>`,
  });

  return transporter.sendMail(options);
}
