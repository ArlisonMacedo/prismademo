import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/user.controller.js";

const userController = new UserController()

export async function userRoutes(app: FastifyInstance) {
  app.post("/user", userController.create)
  app.get("/users", userController.getAll)
}