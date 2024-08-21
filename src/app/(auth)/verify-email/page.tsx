import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import OTPForm from "@/components/forms/OTPForm";
import { verifyEmail } from "@/actions/verifyEmail";

export default function VerifyEmail() {
  return (
    <Card className="mx-auto min-w-96">
      <CardHeader>
        <CardTitle>Please check your email</CardTitle>
        <CardDescription>
          We&apos;ve sent a verification code to your email.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <OTPForm action={verifyEmail} />
      </CardContent>
      <CardFooter className="flex flex-col">
        <span>
          Didn&apos;t receive code?{" "}
          <Button variant="link" className="px-0">
            Click to resend
          </Button>
        </span>
        <div className="mt-4 text-center text-sm ">
          <Link href="/login" className="underline flex items-center">
            <ArrowLeft size={16} />
            <span>Back to login</span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
