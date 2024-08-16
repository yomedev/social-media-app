import { generateState, generateCodeVerifier } from "arctic";
import { google } from "../../../../lib/auth";
import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  // store state verifier as cookie
  cookies().set("google_auth_state", state, {
    secure: process.env.NODE_ENV === "production", // set to false in localhost
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10, // 10 min
    sameSite: "lax",
  });

  // store code verifier as cookie
  cookies().set("google_auth_code_verifier", codeVerifier, {
    secure: process.env.NODE_ENV === "production", // set to false in localhost
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10, // 10 min
    sameSite: "lax",
  });

  return Response.redirect(url);
}
