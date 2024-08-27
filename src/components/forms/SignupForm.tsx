"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { signupFormSchema } from "../../zod-schema/signupFormSchema";
import { signup } from "../../actions/signup";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import TextField from "./fields/TextField";
import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";
import SubmitButton from "../SubmitButton";

import { formStateStatus } from "@/constants";

const { ERROR, SUCCESS, IDLE } = formStateStatus;

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
          <TextField
            control={form.control}
            name="firstName"
            label="First Name"
            errorMessage={form.formState.errors.firstName?.message}
            placeholder="John"
          />
          <TextField
            control={form.control}
            name="lastName"
            label="Last Name"
            errorMessage={form.formState.errors.lastName?.message}
            placeholder="Doe"
          />
        </div>
        <EmailField
          control={form.control}
          errorMessage={form.formState.errors.email?.message}
        />
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
        <SubmitButton loading={form.formState.isSubmitting} className="w-full">
          Create account
        </SubmitButton>
      </form>
    </Form>
  );
}
