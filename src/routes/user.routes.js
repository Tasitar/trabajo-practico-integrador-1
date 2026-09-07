import { Router } from "express";
import { CreateUser } from "../controllers/user.controller.js";

const userRoutes = Router()

userRoutes.post("/users",CreateUser)
//userRoutes.get("/users")
//userRoutes.get("/users/:id")
//userRoutes.put("/users/:id")
//userRoutes.delete("/users/:id")

export { userRoutes }