import axios from "axios";
import { headers } from "../headers.js";

// Api de Hotelbeds Bus
const apiUrl = "https://api.test.hotelbeds.com/transfer-cache-api/1.0";

// Ruta para buscar países
const main = async (req, res) => {
  console.log("Iniciando la función main...");

  try {
    const response = await axios.get(`${apiUrl}/locations/countries`, {
      params: {
        fields: "ALL",
        language: "ES",
        offset: 1,
        limit: 100,
      },
      headers: headers,
    });

    const countries = response.data;

    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "COUNTRY_NOT_FOUND" });
  }
};

export default main;
