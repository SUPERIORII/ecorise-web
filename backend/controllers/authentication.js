const db = require("../database/pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
require("dotenv").config();
const getShadowName = require("./generateObfuscateName");

// user session

const register = async (req, res) => {
  const { username, email, password, role } = req.body;
  const randomString = getShadowName(6);

  const shadowName = `${username}_${randomString}`;
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
        res
          .status(403)
          .json(
            "Access denied!! You do not have permission to register users!!"
          );
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
const login = async (req, res) => {
  try {
    // get the field data from the form
    const { email, loginPassword } = req.body;

    // fetch the user and check if the user exist in the database
    const query = `SELECT * FROM users WHERE email = ?`;

    const [isUserData] = await db.query(query, [email]);
    if (isUserData.length === 0) {
      return res.status(401).json({ error: "The account do not exist!!" });
    }

    // if email exist, compare the password
    const comparePassword = await bcrypt.compare(
      loginPassword,
      isUserData[0].password
    );
    console.log("comparedPassword:", comparePassword);

    if (!comparePassword)
      return res.status(401).json({ error: "Invadid email or password!!" });

    // store the user id in the json web token to get data later if their password is correct
    const token = jwt.sign({ userId: isUserData[0].id }, process.env.SECRET, {expiresIn:"24h"});
    const { password, ...others } = isUserData[0];

    res
      .cookie(process.env.INFOTOKEN, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 16666666,
        })
      .status(200)
      .json("login successful");

  } catch (err) {
    res.json({ error: "Inter server error" });
    console.log(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("infoToken").json("logging out");
};

module.exports = { register, login, logout };
