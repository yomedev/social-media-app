import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "../../../components/forms/SignupForm";
export default function Signup() {
  return (
    <Card className="mx-auto w-96">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
      <CardFooter className="flex justify-center text-center text-sm">
        Already have an account?&nbsp;
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
}
