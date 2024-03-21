import axios from "axios";
import { headers, params } from "../components/paramsHeaders.js";

const apiUrl = "https://api.test.hotelbeds.com/transfer-cache-api/1.0";

const main = async (req, res) => {
  console.log("Iniciando la función main...");

  try {
    const response = await axios.get(`${apiUrl}/masters/categories`, {
      params: params,
      headers: headers,
    });

    // Filtrar categorías únicas por nombre
    const uniqueCategories = Array.from(
      new Set(response.data.map((category) => category.name))
    );

    // Mapear las categorías únicas a un formato deseado
    const categories = uniqueCategories.map((name) => {
      // Buscar la primera aparición de la categoría en los datos originales
      const category = response.data.find((cat) => cat.name === name);
      return {
        code: category.masterCategoryCode,
        name: category.name,
        description: category.description,
      };
    });

    console.log(categories);
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "CATEGORY_NOT_FOUND" });
  }
};

export default main;
