import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "../../../components/forms/LoginForm";
import { buttonVariants } from "@/components/ui/button";

export default function Login() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <Link
          href="/api/oauth/google"
          className={buttonVariants({ variant: "outline" }) + " w-full mt-4"}
        >
          Login with Google
        </Link>
      </CardContent>
      <CardFooter className="flex justify-center text-center text-sm">
        Don&apos;t have an account?&nbsp;
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
}
