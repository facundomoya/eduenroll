import express from "express";
import {userController} from "../../controllers/user.controller.js";

const route = express.Router();

route.get("/user", userController.getAllUsers);
route.post("/user", userController.addUser);

export default route;
