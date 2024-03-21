import express from "express";
import countriesRoute from "./countries.routes.js";
import terminalsRoute from "./terminals.routes.js";
import transferTypeRoute from "./transferType.routes.js";
import categoriesRoute from "./categories.routes.js";

const router = express.Router();
router.use(countriesRoute);
router.use(terminalsRoute);
router.use(transferTypeRoute);
router.use(categoriesRoute);

export default router;
