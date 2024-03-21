import express from "express";
import categoriesController from "../controllers/index.controller.js";

const router = express.Router();

router.get("/categories", categoriesController.categories);

export default router;