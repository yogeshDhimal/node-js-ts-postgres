

import { Router } from "express";
import { createUserController, getAllUsersController } from "../controllers/user.controller.js";

const router = Router();

router.post("/user", createUserController);
router.get("/users", getAllUsersController);

export default router;