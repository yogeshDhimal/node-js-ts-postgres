

import { Request, Response } from "express";
import { createUser } from "../services/user.service.js";
import { createUserSchema } from "../validators/user.validator.js";
import { ZodError } from "zod";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const validatedData = createUserSchema.parse(req.body);

        const user = await createUser(validatedData);//controller ma service lai call garne.

        res.status(201).json({
            user,
            success: true
        });
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                success: false,
                error: error.issues.map((issue) => {
                    return issue.message;
                })
            });
        }
    }
};
