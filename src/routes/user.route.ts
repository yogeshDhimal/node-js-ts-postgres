

import { Router } from "express";
import { createUserController, deleteUserController, getAllUsersController, getSingleUserController, updateUserController } from "../controllers/user.controller.js";

const router = Router();

router.post("/users", createUserController);
router.get("/users", getAllUsersController);
router.get("/users/:id", getSingleUserController);
router.patch("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);

export default router;