import Link from "next/link";
import EmailForm from "../forms/EmailForm";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useStepper } from "../ui/stepper";
import OTPForm from "../forms/OTPForm";
import { verifyEmail } from "@/actions/verifyEmail";
import { sendOTP } from "@/actions/sendOTP";

export default function Steps() {
  const { when, goToNextStep, goToPrevStep } = useStepper();
  return (
    <>
      {when("email").render((step) => (
        <>
          <CardHeader>
            <CardTitle className="text-2xl">{step.title}</CardTitle>
            <CardDescription>{step.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <EmailForm onSuccess={goToNextStep} action={sendOTP} />
          </CardContent>
        </>
      ))}
      {when("code").render((step) => (
        <>
          <CardHeader>
            <CardTitle className="text-2xl">{step.title}</CardTitle>
            <CardDescription>{step.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <OTPForm onSuccess={goToNextStep} action={verifyEmail} />
          </CardContent>
        </>
      ))}
      {when("password").render((step) => (
        <p>{step.title}</p>
      ))}
      <CardFooter className="flex justify-center text-center text-sm">
        <Link href="/login">Back to login</Link>
      </CardFooter>
    </>
  );
}
