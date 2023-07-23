import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import movieRoutes from "./routes/Movies.routes";
import { PrismaClient } from "@prisma/client";
import { ConflictError, NotFoundError } from "./errors/AppError";

const prisma = new PrismaClient();
const server = express();
const port = process.env.PORT;

server.use(express.json());
server.use(movieRoutes);
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).json({
      error: err.msg,
    });
  }

  if (err instanceof ConflictError) {
    return res.status(err.statusCode).json({
      error: err.msg,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: `Internal Server Error - ${err.message}`,
  });
});

server.listen(port, () => {
  console.log(`Server connected ${port}`);
});

export default server;
