import express from "express";

import {developmentErrors} from './middlewares/errorHandlers.js'

import apiRoutes from "./routes/coreApi.js";

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.use(developmentErrors);

export default app;
