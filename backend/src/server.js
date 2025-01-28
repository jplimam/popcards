import { config } from "dotenv";
import app from "./app.js";

config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Running on http://${hostname}:${port}/`);
});
