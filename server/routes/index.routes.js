import express from "express";
import countriesRoute from "./locations.routes.js";

const router = express.Router();
router.use(countriesRoute);

export default router;
