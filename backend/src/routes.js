import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.send({
    success: true,
    statusCode: 200,
    body: "Welcome to Popcard!",
  });
});

export default routes;
