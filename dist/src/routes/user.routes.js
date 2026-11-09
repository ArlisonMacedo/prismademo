import { UserController } from "../controllers/user.controller";
const userController = new UserController();
export async function userRoutes(app) {
    app.post("/user", userController.create);
    app.get("/users", userController.getAll);
}
