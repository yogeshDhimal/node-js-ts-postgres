

import { Request, Response } from "express";
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } from "../services/user.service.js";
import { createUserSchema, updateUserSchema } from "../validators/user.validator.js";
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


export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();

        return res.json({
            users, // password auudaina because entuty ma password lai select: false gareko xa.
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};

export const getSingleUserController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const user = await getSingleUser(id);

        return res.json({
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};

export const updateUserController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const validatedData = updateUserSchema.parse(req.body);

        const updatedUser = await updateUser(id, validatedData);

        return res.json({
            updatedUser,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const deletedUser = await deleteUser(id);

        return res.json({
            deletedUser: deletedUser,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};