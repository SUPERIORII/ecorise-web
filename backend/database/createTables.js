
// creating all the tables of the database
const createTables = async (db) => {

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
      user_role ENUM("guest", "admin", "super admin"),
      user_profile VARCHAR(255),
      create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
  await db.query(userTableQuery);
  console.log("user table created successfully");

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
  await db.query(organizationTableQuery);
  console.log("Organization table created successfully");

  // project table query
  const projectTableQuery = `
    CREATE TABLE IF NOT EXISTS project(
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL UNIQUE,
      description VARCHAR(255),
      project_img VARCHAR(255) NOT NULL UNIQUE,
      unique_id VARCHAR(255),
      user_id INT,
      created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;
  await db.query(projectTableQuery);
  console.log("Project table created successfully");

  // news table query
  const newsTableQuery = `
    CREATE TABLE IF NOT EXISTS news(
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255),
      category TEXT,
      news_slug VARCHAR(255),
      news_img VARCHAR(255) NOT NULL,
      user_id INT,
      created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;

  await db.query(newsTableQuery);
  console.log("News table created successfully");

  // resources table query
  const resourcesableQuery = `
    CREATE TABLE IF NOT EXISTS resources(
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255),
      category TEXT,
      user_id INT,
      created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      resources_thumbnail VARCHAR(255) NOT NULL,
      resources_video VARCHAR(255) NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;

  await db.query(resourcesableQuery);
  console.log("resource table created successfully");

  //member table query
  const memberTableQuery = `
    CREATE TABLE IF NOT EXISTS members(
      id INT AUTO_INCREMENT PRIMARY KEY,
      member_title VARCHAR(255) NOT NULL,
      user_id INT,
      FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;
  db.query(memberTableQuery);
  console.log("members table created successfully");

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

  await db.query(socialLinksTableQuery);
  console.log("social media table created successfully");
};

module.exports = createTables;
