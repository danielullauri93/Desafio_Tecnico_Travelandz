import express from "express";
import countryController from "../controllers/index.controller.js";

const router = express.Router();

router.get("/countries", countryController.countries);

export default router;
