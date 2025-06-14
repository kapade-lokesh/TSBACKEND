import { Router } from "express";
import { createUser } from "../controllers/user.Controller";

const userRoutes = Router();

userRoutes.route("/create").get(createUser);

export default userRoutes;
