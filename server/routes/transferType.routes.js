import express from "express";
import transferTypeController from "../controllers/index.controller.js";

const router = express.Router();

router.get("/transferTypes", transferTypeController.transferType);

export default router;