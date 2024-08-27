import { text, timestamp, pgTable } from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const sessionsTable = pgTable("sessions", {
  id: text("id").primaryKey().unique().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});