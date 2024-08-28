"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "@/zod-schema/verificationCodeSchema";
import { z } from "zod";
import { Form } from "../ui/form";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import OTPField from "./fields/OTPField";
import { FormState } from "@/types";

type OTPFormProps = {
  onSuccess?: () => void;
  onError?: () => void;
  action: (formData: FormData) => Promise<FormState>;
};

export default function OTPForm({ onSuccess, onError, action }: OTPFormProps) {
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { toast } = useToast();

  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof otpSchema>) => {
    const formData = new FormData();
    formData.append("verificationCode", data.otp);

    try {
      const result = await action(formData);
      form.reset();

      if (result.type === "error") {
        toast({
          variant: "destructive",
          description: result.message,
        });
        return;
      }

      if (onSuccess) {
        onSuccess()
        return
      }

      router.push("/");
    } catch {
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <OTPField
          control={form.control}
          errorMessage={form.formState.errors.otp?.message}
        />

        <Button type="submit" className="w-full mt-4">
          Verify
        </Button>
      </form>
    </Form>
  );
}
