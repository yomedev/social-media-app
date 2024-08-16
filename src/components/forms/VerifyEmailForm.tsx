"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verificationCodeSchema } from "@/zod-schema/verificationCodeSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { verifyEmail } from "@/actions/verifyEmail";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

export default function VerifyEmailForm() {
  const form = useForm<z.infer<typeof verificationCodeSchema>>({
    resolver: zodResolver(verificationCodeSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  const { toast } = useToast();

  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof verificationCodeSchema>) => {
    const formData = new FormData();
    formData.append("verificationCode", data.verificationCode);

    try {
      const result = await verifyEmail(formData);
      form.reset();

      if (result.type === "error") {
        toast({
          variant: "destructive",
          description: result.message,
        });
        return;
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
        <FormField
          control={form.control}
          name="verificationCode"
          render={({ field }) => (
            <FormItem>
              {form.formState.errors.verificationCode?.message && (
                <FormMessage />
              )}
              <FormControl>
                <InputOTP pattern="^[a-zA-Z0-9]+$" maxLength={6} {...field}>
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
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-4">
          Verify
        </Button>
      </form>
    </Form>
  );
}
