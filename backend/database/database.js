const mysql2 = require("mysql2/promise");
require("dotenv").config();
const createTables = require("./createTables");
const db = require("./pool");

const createConnection = async () => {
  try {
    // step 1. connect without database to create it
    const connection = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME?.trim()}\``
    );
    console.log("Database created or already exists");
    connection.end();
    // create the tables with the connected database
    createTables(db);
  } catch (err) {
    console.error({ error: "Error executing DB setup:", err });
  }
};

createConnection();
