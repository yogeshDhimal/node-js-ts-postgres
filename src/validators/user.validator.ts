

import { z } from "zod";

export const createUserSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters long"),

    lastName: z.string().min(2, "Last name must be at least 2 characters long"),

    email: z.email("Please enter a valid email"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain an uppercase letter")
        .regex(/[a-z]/, "Password must contain at least a lowercase letter")
        .regex(/[0-9]/, "Password must contain a number")
        .regex(/[^A-Za-z0-9]/, "Password must contain a special character"),

    age: z.number().int().min(1).max(120).nullable(),
});