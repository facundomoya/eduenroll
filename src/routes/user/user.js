import express from "express";
import {userController} from "../../controllers/user.controller.js";
import { VerifyToken } from "../../middleware/verifyToken.js";

const route = express.Router();

route.get("/user", VerifyToken, userController.getAllUsers);
route.get("/user/:id", VerifyToken, userController.getUser);
route.post("/user/administrator", VerifyToken, userController.addAdminUser);
route.post("/user/professor", VerifyToken, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteProfessorUser);
route.put("/user/:id", VerifyToken, userController.updateUser);

export default route;
