import axios from "axios";
import { headers, params } from "../components/paramsHeadersTerminals.js";

// Api de Hotelbeds Bus
const apiUrl = "https://api.test.hotelbeds.com/transfer-cache-api/1.0";

// Ruta para buscar países
const main = async (req, res) => {
  console.log("Iniciando la función main...");

  try {
    const response = await axios.get(`${apiUrl}/masters/transferTypes`, {
      params: params,
      headers: headers,
    });

    const transferType = response.data.map( type => ({
      code: type.code,
      name: type.name,
      description: type.description,
    }));

    console.log(transferType);
    res.json(transferType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "TERMINAL_NOT_FOUND" });
  }
};

export default main;
