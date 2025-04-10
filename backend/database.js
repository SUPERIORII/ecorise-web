const mysql2 = require("mysql2");
require("dotenv").config();

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
    shadowname VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(40) NOT NULL UNIQUE,
    first_name VARCHAR(255),
    Last_name VARCHAR(255),
    password VARCHAR(255),
    user_role ENUM("admin", "super admin"),
    user_profile VARCHAR(255),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(userTableQuery, function (err) {
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
  CREATE TABLE IF NOT EXISTS project(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(255),
    project_img VARCHAR(255) NOT NULL UNIQUE,
    user_id INT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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
    category TEXT,
    user_id INT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    news_img VARCHAR(255) NOT NULL,
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

  //member table query
  const memberTableQuery = ` 
  CREATE TABLE IF NOT EXISTS members(
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_title VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;
  db.query(memberTableQuery, function (err) {
    if (err) {
      console.log("error creating members table:", err.message);
      return;
    }

    console.log("members table created successfully");
  });

  //member table query
  const socialLinksTableQuery = ` 
  CREATE TABLE IF NOT EXISTS social_links(
    id INT AUTO_INCREMENT PRIMARY KEY,
    facebook_Url VARCHAR(255),
    whatsapp_Url VARCHAR(255),
    instagram_Url VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;

  db.query(socialLinksTableQuery, function (err) {
    if (err) {
      console.log("error creating Social Links table:", err.message);
      return;
    }

    console.log("Social Links table created successfully");
  });

  //member table query
  const menuLinksTableQuery = ` 
  CREATE TABLE IF NOT EXISTS menu_links(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    link VARCHAR(30),
    icon VARCHAR(30)
    )
  `;

  db.query(menuLinksTableQuery, function (err) {
    if (err) {
      console.log("error creating Menu Links table:", err.message);
      return;
    }

    console.log("Menu Links table created successfully");
  });
};

createTables();

// db.query("DROP DATABASE egi_database", (err, result) => {
//   if (err) return console.log(err.message);
//   console.log("database is drop");
// });

module.exports = db;
