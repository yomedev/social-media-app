"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import TooltipLabel from "../TooltipLabel";
import { signupFormSchema } from "../../zod-schema/signupFormSchema";
import { signup } from "../../actions/signup";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SignupForm() {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const router = useRouter();

  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof signupFormSchema>) {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    try {
      const result = await signup(formData);
      form.reset();

      if (result.type === "error") {
        toast({
          variant: "destructive",
          description: result.message,
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => form.setFocus("firstName")}
            >
              Try again
            </ToastAction>
          ),
        });
        return;
      }

      router.push("/verify-email");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="grid">
                <TooltipLabel
                  label="First Name"
                  errorMessage={form.formState.errors?.firstName?.message}
                />
                <FormControl>
                  <Input
                    placeholder="Bob"
                    {...field}
                    className={`${
                      form.formState.errors.firstName?.message &&
                      "border-destructive"
                    }`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="grid">
                <TooltipLabel
                  label="Last Name"
                  errorMessage={form.formState.errors?.lastName?.message}
                />
                <FormControl>
                  <Input
                    placeholder="Smith"
                    {...field}
                    className={`${
                      form.formState.errors.lastName?.message &&
                      "border-destructive"
                    }`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid">
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
            <FormItem className="grid">
              <TooltipLabel
                label="Password"
                errorMessage={form.formState.errors?.password?.message}
              />
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="grid">
              <TooltipLabel
                label="Confrim password"
                errorMessage={form.formState.errors?.confirmPassword?.message}
              />
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  className={`${
                    form.formState.errors.confirmPassword?.message &&
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
            "Create account"
          )}
        </Button>
      </form>
    </Form>
  );
}
