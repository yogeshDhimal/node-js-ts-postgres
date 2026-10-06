

import { Request, Response } from "express";
import { createUser } from "../services/user.service.js";
import { createUserSchema } from "../validators/user.validator.js";

export const createUserController = async (req: Request, res: Response) => {
    const validatedData = createUserSchema.parse(req.body);

    const user = await createUser(validatedData);

    res.status(201).json({
        user,
        success: true
    });
}
