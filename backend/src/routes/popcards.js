import express from "express";
import PopcardsControllers from "../controllers/popcards.js";

const popcardsRouter = express.Router();
const popcardsControllers = new PopcardsControllers();

popcardsRouter.get("/", async (req, res) => {
  const { success, statusCode, body } = await popcardsControllers.getPopcards();

  res.status(statusCode).send({ success, statusCode, body });
});

popcardsRouter.get("/:id", async (req, res) => {
  const { success, statusCode, body } = await popcardsControllers.getPopcard(
    req.params.id
  );

  res.status(statusCode).send({ success, statusCode, body });
});

popcardsRouter.post("/", async (req, res) => {
  const { success, statusCode, body } = await popcardsControllers.addPopcard(
    req.body
  );

  res.status(statusCode).send({ success, statusCode, body });
});

popcardsRouter.delete("/:id", async (req, res) => {
  const { success, statusCode, body } = await popcardsControllers.deletePopcard(
    req.params.id
  );

  res.status(statusCode).send({ success, statusCode, body });
});

popcardsRouter.put("/:id", async (req, res) => {
  const { success, statusCode, body } = await popcardsControllers.updatePopcard(
    req.params.id,
    req.body
  );

  res.status(statusCode).send({ success, statusCode, body });
});

export default popcardsRouter;
