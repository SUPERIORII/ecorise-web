const db = require("./database");
const bcrypt = require("bcrypt");
const inquirer = require("inquirer");



const createAdminUser = async () => {
  try {
    // ask the questions and check the user input if they exist in the database
    const acquireUserDetails = await inquirer.default.prompt([
      {
        type: "input",
        name: "userName",
        message: "Enter the new admin username",
        validate: (input) => {
          if (!input) return "username cannot be empty";
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the new admin email",
        validate: (input) => {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!regex.test(input))
            return "Please enter a valid email. Email must contains @gmail.com";
          if (!input) return "username cannot be empty";
          return true;
        },
      },
      {
        type: "password",
        name: "password",
        message: "Enter the new admin password",
        mask: "*",
      },
      {
        type: "input",
        name: "userRole",
        message: "Enter the new admin Role",
      },
    ]);

    const { userName, email, password, userRole } = acquireUserDetails;

    // check if the super admin exist
    const query = "SELECT * FROM users WHERE email =?";
    db.query(query, [email], async (err, result) => {
      if (err) return console.log(err.message);

      if (result.length) return console.log("super admin exist!");

      //   hash the password and store the information in the database
      const hashPassword = await bcrypt.hash(password, 15);
      // //   store the admin in the database
      const query =
        "INSERT INTO users(username, email, password, user_role) VALUES(?,?,?,?)";
      db.query(
        query,
        [userName, email, hashPassword, userRole],
        (err, result) => {
          if (err) return console.log(err.message);
          console.log("Admin has been created");
        }
      );
    });
  } catch (err) {
    console.error(err.message);
  }
};

createAdminUser();
