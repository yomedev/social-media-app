"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import Link from "next/link";
import { loginFormSchema } from "../../zod-schema/loginFormSchema";
import { login } from "../../actions/login";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";
import SubmitButton from "../SubmitButton";

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const router = useRouter();

  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof loginFormSchema>) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const result = await login(formData);
      form.reset();

      if (result.type === "error") {
        toast({
          variant: "destructive",
          description: result.message,
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => form.setFocus("email")}
            >
              Try again
            </ToastAction>
          ),
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
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <EmailField
          control={form.control}
          errorMessage={form.formState.errors.email?.message}
        />
        <PasswordField
          control={form.control}
          errorMessage={form.formState.errors.password?.message}
          link={
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          }
        />
        <SubmitButton loading={form.formState.isSubmitting} className="w-full">
          Login
        </SubmitButton>
      </form>
    </Form>
  );
}
