import { TimeSpan, createDate } from "oslo";
import { generateRandomString, alphabet } from "oslo/crypto";
import { db } from "@/db";
import { emailVerificationCodesTable } from "@/db/schema/email-verification-codes";
import { eq } from "drizzle-orm";
import type { User } from "lucia";
import { isWithinExpirationDate } from "oslo";
import { transporter, getEmailOPtions } from "./nodemailer";

async function generateOTP(userId: string, email: string): Promise<string> {
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

async function sendOTP(email: string, code: string) {
  const options = getEmailOPtions({
    email,
    subject: "Verification code",
    text: code,
  });

  return transporter.sendMail(options);
}

async function verifyOTP(user: User, code: string) {
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

export const otpHandler = {
  generateOTP,
  sendOTP,
  verifyOTP,
};
