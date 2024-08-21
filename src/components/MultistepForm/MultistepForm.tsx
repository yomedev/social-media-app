"use client";

import { defineSteps, Stepper } from "../ui/stepper";
import Steps from "./Steps";

const steps = defineSteps(
  { id: "email", title: "Email", description: "Enter your account email" },
  { id: "code", title: "Code", description: "Enter a code sent to your email" },
  { id: "password", title: "Password", description: "Enter a new password" }
);

type Steps = typeof steps;

export default function MultistepForm() {
  return (
    <Stepper steps={steps} initialStep="email">
      <Steps />
    </Stepper>
  );
}
