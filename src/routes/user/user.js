import express from "express";
import {userController} from "../../controllers/user.controller.js";
import { VerifyToken } from "../../middleware/verifyToken.js";
import { userValidator } from "../../validator/functions/user.validator.js";

const route = express.Router();

route.get("/user", VerifyToken, userController.getAllUsers);
route.get("/user/:id", VerifyToken, userController.getUser);
route.post("/user/administrator", VerifyToken, userValidator.save, userController.addAdminUser);
route.post("/user/professor", VerifyToken, userValidator.save, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteProfessorUser);
route.put("/user/:id", VerifyToken, userController.updateUser);

export default route;
