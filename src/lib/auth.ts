import { db } from "@/db";
import { sessionsTable } from "@/db/schema/sessions";
import { usersTable } from "@/db/schema/users";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { Lucia } from "lucia";

import { Google } from "arctic";

const redirectURI = "http://localhost:3000/api/oauth/google/callback";

export const google = new Google(process.env.GOOGLE_CLIENT_ID!, process.env.GOOGLE_CLIENT_SECRET!, redirectURI);

export const adapter = new DrizzlePostgreSQLAdapter(
  db,
  sessionsTable,
  usersTable
);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      emailVerified: attributes.email_verified,
      email: attributes.email,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  email: string;
  email_verified: boolean;
}
