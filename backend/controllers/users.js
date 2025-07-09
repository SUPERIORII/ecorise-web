const db = require("../database/database");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const getShadowName = require("./generateObfuscateName");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  const { username, email, password, role, profile } = req.body;
  const randomString = getShadowName(6);

  const shadowName = `${username}_${randomString}`;
  const hashPassword = await bcrypt.hash(password, 10);
  const userProfile = profile ? profile : "user-solid.svg";

  // check if the cookies is still valid
  const token = req.cookies.infoToken;
  if (!token) return res.status(401).json("Token Expired");

  // Verifying the user token
  jwt.verify(token, process.env.SECRET, (err, adminInfo) => {
    if (err) return res.status(401).json("Not Login in!!");

    // Getting the user from if the token is valid
    const query = "SELECT * FROM users WHERE id =?";

    db.query(query, [adminInfo.userId], (err, result) => {
      if (err) return res.status(500).json(err.message);

      const adminRole = result[0].user_role;

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
            "INSERT INTO users(username, shadowname, email, password, user_role, user_profile) VALUE(?,?,?,?,?,?)";
          db.query(
            query,
            [username, shadowName, email, hashPassword, role, userProfile],
            (err, result) => {
              if (err) return res.status(500).json(err);
              if (result.affectedRows > 0) {
                res.status(200).json("New Admin has been created");
              } else {
                res.status(400).json("Error Creating New Users");
              }
            }
          );
        });
      } else {
        res
          .status(403)
          .json(
            "Access denied!! You do not have permission to register users!!"
          );
        return;
      }
    });
  });
};

const user = (req, res) => {
  const token = req.cookies.infoToken;

  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err) return res.status(401).json("Session Expired!!");

    const query = "SELECT * FROM users WHERE id =?";

    db.query(query, [data.userId], (err, result) => {
      if (err) return res.status(500).json("something went wrong...");

      const { password, ...others } = result[0];

      res.status(200).json(others);
    });
  });
};

const getUser = (req, res) => {
  const psudoname = req.params.psudoname;

  const query = "SELECT * FROM users WHERE shadowname=?";

  db.query(query, [psudoname], (err, result) => {
    if (err) return res.status(500).json("something went wrong...");

    if (result.length === 0) return res.status(404).json("user not found");

    const { password, ...others } = result[0];

    res.status(200).json(others);
  });
};
const allUsers = (req, res) => {
  const query = `SELECT u.id, u.first_name, u.Last_name,
   u.username, u.email, u.user_role, u.user_profile, 
   u.create_at FROM users AS u ORDER BY create_at DESC`;
  db.query(query, [], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

const updateProfile = (req, res) => {
  const token = req.cookies.infoToken;
  const { user_profile } = req.body;

  if (!token) res.status(401).json("Not log in!");

  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err) return res.status(401).json("Session Expired!!");

    const query = "UPDATE users SET user_profile = ? WHERE id =?";

    db.query(query, [user_profile, data.userId], (err, result) => {
      if (err) return res.status(500).json("something went wrong...");

      console.log("profile updated successfully:", result);
    });
  });
};

module.exports = { addUser, user, getUser, updateProfile, allUsers };
