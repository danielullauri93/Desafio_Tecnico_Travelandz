import axios from "axios";
import { headers, params } from "../components/paramsHeaders.js";

// Api de Hotelbeds Bus
const apiUrl = "https://api.test.hotelbeds.com/transfer-cache-api/1.0";

// Ruta para buscar países
const main = async (req, res) => {
  console.log("Iniciando la función countries...");

  try {
    const response = await axios.get(`${apiUrl}/locations/countries`, {
      params: params,
      headers: headers,
    });

    const countries = response.data.map(country => ({
      code: country.code,
      name: country.name
    }));

    res.json(countries);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "COUNTRY_NOT_FOUND" });
  }
};

export default main;
