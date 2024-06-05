import { z } from "zod";

const userSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name required" })
    .regex(/^[A-Za-z ]*$/, { message: "Please enter a valid name" }),

  lastName: z
    .string()
    .min(1, { message: "Last name required" })
    .regex(/^[A-Za-z ]*$/, { message: "Please enter a valid last name" }),
    pinCode: z
    .string()
    .refine((value) => value.length === 6, {
      message: "Pincode must be 6 digit long",
    }),
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export { userSchema };
