import express from "express";
import {userController} from "../../controllers/user.controller.js";
import { VerifyToken } from "../../middleware/verifyToken.js";

const route = express.Router();

route.get("/user", VerifyToken,userController.getAllUsers);
route.get("/user/:id", VerifyToken, userController.getUser);
route.post("/user/administrator", userController.addAdminUser);
route.post("/user/professor", userController.addProfessorUser);
route.delete("/user/:id", userController.deleteProfessorUser);
route.put("/user/:id", userController.updateUser);

export default route;
