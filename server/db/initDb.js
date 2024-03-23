import getPool from "./getPool.js";

const main = async () => {
  // Variable que almacenará una conexión con la base de datos.
  let pool;

  try {
    pool = await getPool();

    console.log("Borrando tablas...");

    await pool.query(
      "DROP TABLE IF EXISTS entryVotes, entryPhotos, entries, users"
    );

    console.log("Creando tablas...");

    // Creamos la tabla de usuarios.
    await pool.query(`
              CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                email VARCHAR(100) UNIQUE NOT NULL,
                username VARCHAR(30) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL
              )
        `);

    // Creamos la tabla de traslado.
    await pool.query(`
              CREATE TABLE TransferOptions (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                origin_code VARCHAR(10) NOT NULL,
                origin_name VARCHAR(255) NOT NULL,
                terminal_code VARCHAR(10) NOT NULL,
                terminal_description VARCHAR(255) NOT NULL,
                arrival_date DATE NOT NULL,
                arrival_time TIME NOT NULL,
                num_adults INT NOT NULL,
                num_child INT NOT NULL,
                category_code VARCHAR(10) NOT NULL,
                category_name VARCHAR(255) NOT NULL,
                transfer_code VARCHAR(10) NOT NULL,
                transfer_name VARCHAR(255) NOT NULL
              )
        `);

    console.log("¡Tablas creadas!");
  } catch (err) {
    console.error(err);
  } finally {
    // Cerramos el proceso.
    process.exit();
  }
};

// Ejecutamos la función anterior.
main();

/** para ejecutar este archivo y se creen la base de datos y las tablas
 * con el comando:
 * node .\db\initDb.js
 */
