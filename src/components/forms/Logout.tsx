"use client";

import { logout } from "@/actions/logout";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { useFormState, useFormStatus } from "react-dom";

export default function Logout() {
  const [state, action] = useFormState(logout, undefined);
  const { pending } = useFormStatus();

  const { toast } = useToast();

  // if (state?.type === "error") {
  //   toast({
  //     variant: "destructive",
  //     description: state.message,
  //   });
  // }

  return (
    <form action={action}>
      <Button disabled={pending} type="submit">
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> &nbsp;Please wait
          </>
        ) : (
          "Logout"
        )}
      </Button>
    </form>
  );
}
