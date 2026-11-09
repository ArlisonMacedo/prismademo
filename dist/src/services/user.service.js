import { prisma } from "../lib/prisma";
export class UserService {
    async create(data) {
        const userExist = await prisma.user.findUnique({
            where: { email: data.email }
        });
        if (userExist) {
            throw new Error("E-mail já cadastrado");
        }
        return await prisma.user.create({
            data
        });
    }
    async list() {
        return await prisma.user.findMany();
    }
}
