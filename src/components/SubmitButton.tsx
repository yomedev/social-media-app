"use client";

import { ButtonHTMLAttributes } from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const {pending} = useFormStatus();
  console.log(status);

  return (
    <Button type="submit" disabled={pending} {...rest}>
      {children}
    </Button>
  );
}
