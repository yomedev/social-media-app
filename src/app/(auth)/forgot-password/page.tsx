import { sendLink } from "@/actions/sendLink";
import EmailForm from "@/components/forms/EmailForm";
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

export default function ForgotPassword() {
  return (
    <Card className="mx-auto w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot password?</CardTitle>
        <CardDescription>
          Enter your account email. We&apos;ll send you an email with a link to
          reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <EmailForm action={sendLink} />
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center text-center text-sm">
        Remember password?
        <Link href="/login" className="underline flex items-center">
          <ArrowLeft className="w-4 h-4" />
          &nbsp;Back to login
        </Link>
      </CardFooter>
    </Card>
  );
}
