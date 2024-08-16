import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Tabs defaultValue="email" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="email">
        <Card>
          <CardHeader>
            <CardTitle>Forgot password?</CardTitle>
            <CardDescription>
              Enter your account email, we&apos;ll send you a code to reset your
              password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Send reset code</Button>
            <div className="mt-4 text-center text-sm ">
              <Link href="/login" className="underline flex items-center">
                <ArrowLeft size={16} />
                <span>Back to login</span>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <Card>
          <CardHeader>
            <CardTitle>Reset code</CardTitle>
            <CardDescription>
              Enter code which we sent to your email.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 flex justify-center">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Continue</Button>
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
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Set new password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">New password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Confirm password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Save password</Button>
            <div className="mt-4 text-center text-sm ">
              <Link href="/login" className="underline flex items-center">
                <ArrowLeft size={16} />
                <span>Back to login</span>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
