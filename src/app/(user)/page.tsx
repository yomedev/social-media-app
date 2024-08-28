import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/dal";

export default async function Home() {
  // const { user } = await validateRequest();

  // if (!user) {
  //   redirect("/login");
  // }

  // try {
  //   const res = await fetch("http://localhost:3001/api/ws");
  //   console.log(res);
  // } catch (error) {
  //   console.log(error);
  // }

  return <div></div>;
}
