import getPool from "../../db/getPool.js";

const main = async (
  origin_code,
  origin_name,
  terminal_code,
  terminal_name,
  arrival_date,
  arrival_time,
  num_adults,
  num_child,
  category_code,
  category_name,
  transfer_code,
  transfer_name
) => {
  try {
    const pool = await getPool();

    const sqlQuery =
      "INSERT INTO transferoptions (origin_code, origin_name, terminal_code, terminal_name, arrival_date, arrival_time, num_adults, num_child, category_code, category_name, transfer_code, transfer_name) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

    const values = [
      origin_code,
      origin_name,
      terminal_code,
      terminal_name,
      arrival_date,
      arrival_time,
      num_adults,
      num_child,
      category_code,
      category_name,
      transfer_code,
      transfer_name,
    ];

    const response = await pool.query(sqlQueryString, values);

    return response;

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "ERROR_INSERTING_INTO_DATABASE" });
  }
};

export default main;
