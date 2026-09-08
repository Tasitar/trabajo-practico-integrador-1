import { Router } from "express";

const articleTagRoutes = Router()

articleTagRoutes.post("/articleTag")
articleTagRoutes.get("/articleTag")
articleTagRoutes.get("/articleTag/:id")
articleTagRoutes.put("/articleTag/:id")
articleTagRoutes.delete("/articleTag/:id")

export { articleTagRoutes }