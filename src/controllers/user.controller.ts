

import { Request, Response } from "express";
import { createUser } from "../services/user.service.js";

export const createUserController = async (req: Request, res: Response) => {
    const user = await createUser(req.body);

    res.status(201).json({
        user,
        success: true
    });
}
