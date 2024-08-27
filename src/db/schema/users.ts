import { text, pgTable, boolean } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: text("id").primaryKey().unique().notNull(),
  email: text("email").unique().notNull(),
  passwordHash: text("password_hash"),
  emailVerified: boolean("email_verified").notNull().default(false),
  googleId: text("google_id").unique(),
});
