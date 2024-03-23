import axios from "axios";
import { headers, params } from "../../components/paramsHeaders.js";

const apiUrl = "https://api.test.hotelbeds.com/transfer-cache-api/1.0";

const main = async (req, res) => {
  console.log("Iniciando la función transferType...");

  try {
    const response = await axios.get(`${apiUrl}/masters/transferTypes`, {
      params: params,
      headers: headers,
    });

    const transferType = response.data.map((type) => ({
      code: type.code,
      name: type.name,
      description: type.description,
    }));

    res.json(transferType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "TRANSFER_TYPE_NOT_FOUND" });
  }
};

export default main;
