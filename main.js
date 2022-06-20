import express from "express";
import bodyParser from "body-parser";
import { router as genreRouter } from "./src/routes/genre.routes.js";
import { router as actorRouter } from "./src/routes/actor.routes.js";

import "dotenv/config";
const app = express();

// middlewares
app.use(express.json()); // json parse
app.use(bodyParser.urlencoded({ extended: true }));

// listen to the server
app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
