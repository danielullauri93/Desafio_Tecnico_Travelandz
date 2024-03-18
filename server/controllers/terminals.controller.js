import axios from "axios";
import { headers, params } from "../components/paramsHeadersTerminals.js";

// Api de Hotelbeds Bus
const apiUrl = "https://api.test.hotelbeds.com/transfer-cache-api/1.0";

// Ruta para buscar países
const main = async (req, res) => {
  console.log("Iniciando la función main...");

  try {
    const response = await axios.get(`${apiUrl}/locations/terminals`, {
      params: params,
      headers: headers,
    });

    const terminals = response.data.map(({ code, content }) => ({
      code,
      description: content.description,
    }));

    console.log(terminals);
    res.json(terminals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "TERMINAL_NOT_FOUND" });
  }
};

export default main;
