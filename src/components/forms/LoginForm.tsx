"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import TooltipLabel from "@/components/TooltipLabel";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { loginFormSchema } from "../../zod-schema/loginFormSchema";
import { login } from "../../actions/login";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <TooltipLabel
                label="Email"
                errorMessage={form.formState.errors?.email?.message}
              />
              <FormControl>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  {...field}
                  className={`${
                    form.formState.errors.email?.message && "border-destructive"
                  }`}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <div className="flex items-center">
                <TooltipLabel
                  label="Password"
                  errorMessage={form.formState.errors?.password?.message}
                />
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  className={`${
                    form.formState.errors.password?.message &&
                    "border-destructive"
                  }`}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> &nbsp;Please
              wait
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
}
