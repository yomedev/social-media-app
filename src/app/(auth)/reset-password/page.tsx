import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { resetPassword } from "@/actions/resetPassword";

export default function ResetPassword({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  const { token } = searchParams;


  return (
    <Card className="mx-auto min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Set new password</CardTitle>
        <CardDescription>Must be at least 8 characters.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm action={resetPassword.bind(null, token)} />
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center text-center text-sm">
        Remember password?&nbsp;
        <Link href="/login" className="underline flex">
          <ArrowLeft />
          &nbsp;Back to login
        </Link>
      </CardFooter>
    </Card>
  );
}
