import express from "express";
import terminalController from "../../controllers/transfer/index.controller.js";

const router = express.Router();

router.get("/terminals", terminalController.terminals);

export default router;