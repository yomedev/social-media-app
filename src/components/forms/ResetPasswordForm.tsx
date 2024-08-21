"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { resetPasswordFormSchema } from "@/zod-schema/resetPasswordFormSchema";
import PasswordField from "./fields/PasswordField";
import SubmitButton from "../SubmitButton";
import { FormProps, FormState } from "@/types";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { LogIn, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useState } from "react";

export default function ResetPasswordForm({ action }: FormProps) {
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const [formStatus, setFormStatus] = useState<FormState>();

  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof resetPasswordFormSchema>) {
    const formData = new FormData();
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    try {
      const result = await action(formData);
      form.reset();

      if (result.type === "error") {
        toast({
          variant: "destructive",
          description: result.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        return;
      }

      setFormStatus(result);
    } catch {
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <>
      {formStatus?.type === "success" && (
        <Alert className="border-blue-500 mb-6">
          <AlertTitle className="flex justify-center gap-1">
            <ShieldCheck className="h-5 w-5 text-blue-500" />
            {formStatus?.message}
          </AlertTitle>
          <AlertDescription className="flex flex-col items-center">
            Now login with your new password.
            <Link
              href="/login"
              className={buttonVariants({
                variant: "link",
                className: "px-1 text-blue-500",
              })}
            >
              <LogIn className="h-5 w-5 text-blue-500" />
              Go to login
            </Link>
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <PasswordField
            control={form.control}
            errorMessage={form.formState.errors.password?.message}
          />
          <PasswordField
            control={form.control}
            errorMessage={form.formState.errors.confirmPassword?.message}
            name="confirmPassword"
            label="Confirm Password"
          />
          <SubmitButton
            className="w-full"
            loading={form.formState.isSubmitting}
          >
            Reset password
          </SubmitButton>
        </form>
      </Form>
    </>
  );
}
