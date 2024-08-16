import { google, lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import type { GoogleTokens } from "arctic";
import { generateIdFromEntropySize } from "lucia";
import { db } from "@/db";
import { usersTable } from "@/db/schema/users";
import { eq } from "drizzle-orm";

type GoogleProfile = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
};

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const storedState = cookies().get("google_auth_state")?.value ?? null;
  const storedCodeVerifier =
    cookies().get("google_auth_code_verifier")?.value ?? null;
  if (
    !code ||
    !state ||
    !storedState ||
    !storedCodeVerifier ||
    state !== storedState
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens: GoogleTokens = await google.validateAuthorizationCode(
      code,
      storedCodeVerifier
    );
    const response = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      }
    );
    const user: GoogleProfile = await response.json();
    console.log(user);
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.googleId, user.sub))
      .then((users) => users[0]);

    let userId = "";

    if (!existingUser) {
      userId = generateIdFromEntropySize(10); // 16 characters long

      // Replace this with your own DB client.
      await db.insert(usersTable).values({
        id: userId,
        googleId: user.sub,
        email: user.email,
        emailVerified: true,
      });
    }

    const session = await lucia.createSession(existingUser?.id ?? userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    console.log(e);

    return new Response(null, {
      status: 500,
    });
  }
}

// {
//   sub: '100919343051990183464',
//   name: 'Yaroslav Omelianenko',
//   given_name: 'Yaroslav',
//   family_name: 'Omelianenko',
//   picture: 'https://lh3.googleusercontent.com/a/ACg8ocKRQSBcviYybvH5OUBFXDvFR2ng04qLpalDUE0a3vvPcKCG4g=s96-c',
//   email: 'engyarome@gmail.com',
//   email_verified: true
// }
