"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { emailFormSchema } from "@/zod-schema/emailFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailField from "./fields/EmailField";
import SubmitButton from "../SubmitButton";
import { FormProps, FormState } from "@/types";
import { useToast } from "../ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { MailCheck } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function EmailForm({ action }: FormProps) {
  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  });

  const { toast } = useToast();

  const [formStatus, setFormStatus] = useState<FormState>();

  async function onSubmit(data: z.infer<typeof emailFormSchema>) {
    const formData = new FormData();
    formData.append("email", data.email);
    console.log(data);

    try {
      const result = await action(formData);

      if (result.type === "error") {
        toast({
          variant: "destructive",
          description: result.message,
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        {formStatus?.type === "success" && (
          <Alert className="border-blue-500">
            <AlertTitle className="flex justify-center gap-1">
              <MailCheck className="h-5 w-5 text-blue-500" />
              {formStatus?.message}
            </AlertTitle>
            <AlertDescription className="text-center">
              Didn&apos;t receive link?{" "}
              <Button
                type="submit"
                variant="link"
                className="px-0 text-blue-500"
              >
                Click to resend
              </Button>
            </AlertDescription>
          </Alert>
        )}
        <EmailField
          control={form.control}
          errorMessage={form.formState.errors.email?.message}
        />
        <SubmitButton className="w-full" loading={form.formState.isSubmitting}>
          Send link
        </SubmitButton>
      </form>
    </Form>
  );
}
