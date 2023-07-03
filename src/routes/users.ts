import { Router } from "express";
import { userController } from "../controllers/usersController";

const usersRoute = Router();

usersRoute.post("/login", userController.login);

export default usersRoute;
