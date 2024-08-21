"use client";

import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = ButtonProps & {
  loading?: boolean;
};
export default function SubmitButton({
  children,
  loading = false,
  ...rest
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={loading || pending} {...rest}>
      {loading || pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> &nbsp;Please wait
        </>
      ) : (
        children
      )}
    </Button>
  );
}
