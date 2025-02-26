const mysql2 = require("mysql2");
require("dotenv").config();

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) return console.log("error:", err.message);

  db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
    if (err) return console.log("Error", err.message);
    console.log("database is created successfully");
  });

  console.log("database is connected");
});

// creating all the tables of the database
const createTables = () => {
  // user table query
  const userTableQuery = ` 
  CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(255),
    user_role ENUM("admin", "super_admin"),
    user_profile VARCHAR(255)
    )
  `;
  db.query(userTableQuery, function(err) {
    if (err) {
      console.log("error creating user table:", err.message);
      return;
    }

    console.log("user table created successfully");
  });

  // organization table query
  const organizationTableQuery = ` 
  CREATE TABLE IF NOT EXISTS organization(
    id INT AUTO_INCREMENT PRIMARY KEY,
    organization_name VARCHAR(255) NOT NULL,
    description VARCHAR(100),
    mission VARCHAR(255),
    logo VARCHAR(255)
    )
  `;
  db.query(organizationTableQuery, function (err) {
    if (err) {
      console.log("error creating organization table:", err.message);
      return;
    }

    console.log("organization table created successfully");
  });


  // project table query
  const projectTableQuery = ` 
  CREATE TABLE IF NOT EXISTS organization(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    created_date DATE,
    ended_date DATE,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;
  db.query(projectTableQuery, function (err) {
    if (err) {
      console.log("error creating project table:", err.message);
      return;
    }

    console.log("project table created successfully");
  });

  // news table query
  const newsTableQuery = ` 
  CREATE TABLE IF NOT EXISTS news(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    user_id INT,
    created_date DATE,
    new_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;
  db.query(newsTableQuery, function (err) {
    if (err) {
      console.log("error creating News table:", err.message);
      return;
    }

    console.log("news table created successfully");
  });
};


createTables();
module.exports = db;

