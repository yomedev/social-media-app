import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/dal";
import Logout from "@/components/forms/Logout";

export default async function Home() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello, {user?.email}!</h1>
      <Logout />
    </>
  );
}
