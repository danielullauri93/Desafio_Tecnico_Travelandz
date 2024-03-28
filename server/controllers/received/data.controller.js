import getPool from "../../db/getPool.js";

const saveData = async (req, res) => {
  try {
    const {
      originName,
      terminalName,
      arrivalDate,
      arrivalTime,
      numAdults,
      numChildren,
      categoryName,
      transferName,
    } = req.body;

    // Formatear la fecha de llegada en el formato adecuado para MySQL
    const formattedArrivalDate = new Date(arrivalDate)
      .toISOString()
      .split("T")[0];

    // Obtener una conexión con la base de datos
    const pool = await getPool();

    // Consulta SQL para insertar los datos en la tabla transferoptions
    const sqlQuery = `
      INSERT INTO transferoptions 
        (origin_name, terminal_name, arrival_date, arrival_time, num_adults, num_child, category_name, transfer_name) 
      VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Valores a insertar en la consulta SQL
    const values = [
      originName,
      terminalName,
      formattedArrivalDate,
      arrivalTime,
      numAdults,
      numChildren,
      categoryName,
      transferName,
    ];

    // Ejecutar la consulta SQL
    const response = await pool.query(sqlQuery, values);

    // Enviar una respuesta de éxito al cliente
    res
      .status(200)
      .json({ message: "Data saved successfully", data: response });
  } catch (error) {
    // Enviar una respuesta de error al cliente en caso de que falle la operación
    console.error(error);
    res.status(500).json({ message: "Error saving data" });
  }
};

export default saveData;
