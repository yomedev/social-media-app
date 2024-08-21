import { z } from "zod";

export const signupFormSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "First name is required" })
      .max(50),
    lastName: z
      .string()
      .trim()
      .min(2, { message: "Last name is required" })
      .max(50),
    email: z.string().trim().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
