import { z } from "zod";

export const verificationCodeSchema = z.object({
  verificationCode: z.string().min(6, { message: "Code must be 6 characters" }),
});
