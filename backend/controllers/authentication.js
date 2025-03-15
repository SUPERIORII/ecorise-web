const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
require("dotenv").config();
const getShadowName = require("./generateObfuscateName")

// user session

const register = async (req, res) => {
  const { username, email, password, role } = req.body;
  const randomString = getShadowName(6)
  
  const shadowName = `${username}_${randomString}`
  const hashPassword = await bcrypt.hash(password, 10);
 

  // check if the cookies is still valid
  const token = req.cookies.infoToken;

  jwt.verify(token, process.env.SECRET, (err, adminInfo) => {
    if (err) return res.status(401).json("Not Login in!!");

    const query = "SELECT * FROM users WHERE id =?";

    db.query(query, [adminInfo.userId], (err, result) => {
      if (err) return res.status(500).json(err.message);

      const adminRole = result[0].user_role;

      // // check if user role is not super admin to not register new user
      if (adminRole === "admin") {
        res.status(403).json("Access denied!! You do not have permission to register users!!");
        return;
      }

      // check if user role is super admin to register new user
      if (adminRole === "super admin") {
        // check if the new user email is register

        const query = "SELECT * FROM users WHERE email=?";
        db.query(query, [email], (err, result) => {
          if (err) return res.status(500).json(err);

          if (result.length)
            return res.status(409).json("Account already exist!!");

          // register the new admin user
          const query =
            "INSERT INTO users(username, shadowname, email, password, user_role) VALUE(?,?,?,?,?)";
          db.query(
            query,
            [username, shadowName, email, hashPassword, role],
            (err) => {
              if (err) return res.status(500).json(err);

              res.status(200).json("New Admin has been created");
            }
          );
        });
      }
    });
  });
};

// user login
const login = (req, res) => {
  // get the field data from the form
  const { email, password } = req.body;

  try {
    // fetch the user and check if the user exist in the database
    const query = `SELECT * FROM users WHERE email = ?`;

    db.query(query, [email], async (err, result) => {
      if (err) throw err;

      if (result.length === 0)
        return res.status(401).json("The account do not exist!!");

      // if email exist, compare the password
      const comparePassword = await bcrypt.compare(
        password,
        result[0].password
      );

      if (!comparePassword)
        return res.status(401).json("Invadid email or password!!");

      if (comparePassword !== 0) {
        // store the id key in the json web token to get data later
        const token = jwt.sign({ userId: result[0].id }, process.env.SECRET);

        const { password, ...others } = result[0];

        // store the user token in the session storage
        res
          .cookie(process.env.INFOTOKEN, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 16666666,
            // secure: true
          })
          .status(200)
          .json("login successful");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("infoToken").json("logging out");
};

module.exports = { register, login, logout };
