import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { sessionsTable } from "./schema/sessions";
import { usersTable } from "./schema/users";
import { emailVerificationCodesTable } from "./schema/email-verification-codes";

const schema = {
  sessionsTable,
  usersTable,
  emailVerificationCodesTable
};

const queryClient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryClient, { schema });
