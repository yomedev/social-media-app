import { text, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const emailVerificationCodesTable = pgTable("email_verification_codes", {
  id: serial("id").primaryKey(),
  code: text("code").notNull(),
  userId: text("user_id").unique(),
  email: text("email").notNull(),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
