import { TimeSpan, createDate } from "oslo";
import { generateRandomString, alphabet } from "oslo/crypto";
import { db } from "@/db";
import { emailVerificationCodesTable } from "@/db/schema/email-verification-codes";
import { eq } from "drizzle-orm";

export async function generateEmailVerificationCode(
  userId: string,
  email: string
): Promise<string> {
  await db
    .delete(emailVerificationCodesTable)
    .where(eq(emailVerificationCodesTable.userId, userId));

  const code = generateRandomString(6, alphabet("0-9", "A-Z"));

  await db.insert(emailVerificationCodesTable).values({
    userId,
    email,
    code,
    expiresAt: createDate(new TimeSpan(15, "m")),
  });

  return code;
}
