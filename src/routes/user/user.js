import express from "express";
import {userController} from "../../controllers/user.controller.js";

const route = express.Router();

route.get("/user", userController.getAllUsers);
route.get("/user/:id", userController.getUser);
route.post("/user/administrator", userController.addAdminUser);
route.post("/user/professor", userController.addProfessorUser);
route.delete("/user/:id", userController.deleteProfessorUser);

export default route;
