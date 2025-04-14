import express from "express";
import { createUserAndAdministrator, getAllUsers } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/user", createUserAndAdministrator);
router.get("/user", getAllUsers);

export default router;
