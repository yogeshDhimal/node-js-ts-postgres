

import { z } from "zod";

export const createUserSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.email(),
    password: z.string().min(8),
    age: z.number().int().min(1).max(120).nullable(),

});