import { cookies } from "next/headers";
import { cache } from "react";
import { lucia } from "./auth";

export const validateRequest = cache(async () => {
  // getting session from cookies
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    return { session: null, user: null };
  }
  // getting session from db
  const { session, user } = await lucia.validateSession(sessionId);

  // if session in db and not expired
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }
  // if session not in db
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }

  return { session, user };
});
