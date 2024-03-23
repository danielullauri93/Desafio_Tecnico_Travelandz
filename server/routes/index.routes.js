import express from "express";
import countriesRoute from "./transfer/countries.routes.js";
import terminalsRoute from "./transfer/terminals.routes.js";
import transferTypeRoute from "./transfer/transferType.routes.js";
import categoriesRoute from "./transfer/categories.routes.js";
import dataRoute from "./received/data.routes.js"

const router = express.Router();

//Ruta de solicitud a la Api Hotelbeds
router.use(countriesRoute);
router.use(terminalsRoute);
router.use(transferTypeRoute);
router.use(categoriesRoute);

//Ruta para guardar la informacion que proporciona el usuario
router.use(dataRoute);

export default router;
