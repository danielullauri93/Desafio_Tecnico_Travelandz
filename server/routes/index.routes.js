import express from "express";
import countriesRoute from "./countries.routes.js";
import terminalsRoute from "./terminals.routes.js";

const router = express.Router();
router.use(countriesRoute);
router.use(terminalsRoute);

export default router;
