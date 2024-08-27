import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/dal";

export default async function Home() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }

  return <div></div>;
}
