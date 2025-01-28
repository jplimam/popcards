import { Router } from "express";
import authRouter from "./auth/auth.js";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.send({
    success: true,
    statusCode: 200,
    body: "Welcome to Popcard!",
  });
});

routes.use("/auth", authRouter);

export default routes;
