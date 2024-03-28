import getPool from "../../db/getPool.js";

const getData = async (req, res) => {
  try {
    const pool = await getPool();

    const sqlQuery = `
      SELECT * FROM hotelbeds.transferoptions;
    `;

    const [response] = await pool.query(sqlQuery);

    console.log("Datos obtenidos de la base de datos:", response);

    res.status(200).json({ message: "Data retrieved successfully", data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving data" });
  }
};

export default getData;