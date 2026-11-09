import { FastifyRequest, FastifyReply } from "fastify";
import { UserService } from "../services/user.service";

const userService = new UserService()

export class UserController {
  async create(
    request: FastifyRequest<{
      Body: {
        name: string;
        email: string;
      }
    }>,
    reply: FastifyReply
  ) {
    const data = request.body
    const user = await userService.create(data)

    return reply.status(201).send(user)
  }

  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const users = await userService.list()
    return reply.send(users)
  }
}