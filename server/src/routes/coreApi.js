import create from "../controllers/CRUDController/create.js";
import remove from "../controllers/CRUDController/remove.js";

import { Employee } from "../models/coreModels/Employee.js";

import express from "express";

const router = express.Router();

//employee routes
router.route("/employee/create").post(catchErrors(create(Employee)));
router.route("/employee/remove/:id").delete(catchErrors(remove(Employee)));

export default router;
