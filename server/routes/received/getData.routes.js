import expres from "express";
import getRegister from "../../controllers/received/index.controller.js";

const router = expres.Router()

router.get("/getList", getRegister.get);

export default router;