import Fastify from "fastify"
import cors from "@fastify/cors"
import { userRoutes } from "./routes/user.routes.js"

const app = Fastify({ logger: true })

app.register(userRoutes)
await app.register(cors, {
  origin: true,
  methods: [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
    "OPTIONS",
  ],
  credentials: true
})

const start = () => {
  try {
    const port = Number(process.env.PORT) || 3333
    app.listen({
      port,
      host: "0.0.0.0"
    })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()