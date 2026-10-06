

import { Router } from "express";
import { createUserController, getAllUsersController, getSingleUserController } from "../controllers/user.controller.js";

const router = Router();

router.post("/user", createUserController);
router.get("/users", getAllUsersController);
router.get("/user/:id", getSingleUserController);

export default router;