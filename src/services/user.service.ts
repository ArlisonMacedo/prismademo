import { prisma } from "../lib/prisma.js"

interface UserServiceDTO {
  name: string;
  email: string;
}

export class UserService {
  async create(data: UserServiceDTO) {
    const userExist = await prisma.user.findUnique({
      where: { email: data.email }
    })

    if (userExist) {
      throw new Error("E-mail já cadastrado")
    }

    return await prisma.user.create({
      data
    })
  }

  async list() {
    return await prisma.user.findMany()
  }

}