

import { Router } from "express";
import { createUserController, getAllUsersController, getSingleUserController, updateUserController } from "../controllers/user.controller.js";

const router = Router();

router.post("/user", createUserController);
router.get("/users", getAllUsersController);
router.get("/user/:id", getSingleUserController);
router.patch("/user/:id", updateUserController);

export default router;