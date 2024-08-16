"use server";

import { lucia } from "@/lib/auth";
import { validateRequest } from "@/lib/dal";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logout() {
  const { session } = await validateRequest();
  console.log(session);

  if (!session) {
    return {
      type: "error",
      message: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  redirect("/login");
}
