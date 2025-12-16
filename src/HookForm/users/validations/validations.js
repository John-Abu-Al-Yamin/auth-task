import { email, refine, z } from "zod";
import { pattern } from "../../constants";

export const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((text) => {
      return pattern.email.test(text), { message: "Invalid email format" };
    }),
});

