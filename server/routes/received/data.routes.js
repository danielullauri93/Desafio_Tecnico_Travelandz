import expres from "express";
import infoRegister from "../../controllers/received/index.controller.js";

const router = expres.Router()

router.post("/data/transfer", infoRegister.data);

export default router;