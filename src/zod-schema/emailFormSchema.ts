import { z } from "zod";

export const emailFormSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
});
