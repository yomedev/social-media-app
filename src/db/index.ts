import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { sessionsTable } from "./schema/sessions";
import { usersTable } from "./schema/users";
import { emailVerificationCodesTable } from "./schema/email-verification-codes";
import { passwordResetTokensTable } from "./schema/password-reset-tokens";

const schema = {
  sessionsTable,
  usersTable,
  emailVerificationCodesTable,
  passwordResetTokensTable,
};

const queryClient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryClient, { schema });
