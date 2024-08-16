import { db } from "@/db";
import { emailVerificationCodesTable } from "@/db/schema/email-verification-codes";
import { eq } from "drizzle-orm";
import type { User } from "lucia";
import { isWithinExpirationDate } from "oslo";

export async function verifyCode(user: User, code: string) {
  const verificationData = await db.query.emailVerificationCodesTable.findFirst(
    { where: eq(emailVerificationCodesTable.userId, user.id) }
  );

  if (!verificationData || verificationData.code !== code) {
    return false;
  }

  await db
    .delete(emailVerificationCodesTable)
    .where(eq(emailVerificationCodesTable.id, verificationData.id));

  if (!isWithinExpirationDate(verificationData.expiresAt)) {
    return false;
  }

  if (user.email !== verificationData.email) {
    return false;
  }

  return true;
}
