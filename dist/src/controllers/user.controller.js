import { UserService } from "../services/user.service.js";
const userService = new UserService();
export class UserController {
    async create(request, reply) {
        const data = request.body;
        const user = await userService.create(data);
        return reply.status(201).send(user);
    }
    async getAll(request, reply) {
        const users = await userService.list();
        return reply.send(users);
    }
}
//# sourceMappingURL=user.controller.js.map