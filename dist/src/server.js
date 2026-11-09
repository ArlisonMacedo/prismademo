import Fastify from "fastify";
import { userRoutes } from "./routes/user.routes";
const app = Fastify({ logger: true });
app.register(userRoutes);
const start = () => {
    try {
        const port = Number(process.env.PORT) || 3333;
        app.listen({
            port,
            host: "0.0.0.0"
        });
    }
    catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};
start();
