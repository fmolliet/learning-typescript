/* eslint-disable no-unused-vars */
import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(routes);

app.listen(3333);

// ao inves do nodemon
// Babel ou Sucrase / TS-node Dev
// @ decoreators usado no TypeORM