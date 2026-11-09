import { UserController } from "../controllers/user.controller.js";
const userController = new UserController();
export async function userRoutes(app) {
    app.post("/user", userController.create);
    app.get("/users", userController.getAll);
}
//# sourceMappingURL=user.routes.js.map