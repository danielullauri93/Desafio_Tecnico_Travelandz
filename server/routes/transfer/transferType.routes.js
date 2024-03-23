import express from "express";
import transferTypeController from "../../controllers/transfer/index.controller.js";

const router = express.Router();

router.get("/transferTypes", transferTypeController.transferType);

export default router;