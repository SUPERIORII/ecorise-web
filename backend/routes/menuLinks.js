const express = require("express");
const db = require("../database");
const jwt = require("jsonwebtoken");

const router = express.Router();

// ADDING TO THE DATABASE
router.post("/", (req, res) => {
  // get the user cookies and check if it is valid
  const token = req.cookies.infoToken;
  if (!token) return res.status(403).json("token is not valid");

  jwt.verify(token, process.env.SECRET, (err, userData) => {
    if (err) return res.status(401).json("not log in");

    // get the user and check their role
    db.query(
      "SELECT users.user_role FROM users WHERE id=?",
      [userData.userId],
      (err, userInfo) => {
        if (err) return res.status(500).json(err);
        const userRole = userInfo[0].user_role;

        // create a page only if the user is a super admin
        if (userRole === "super admin") {
          const { menu_name, link, icon, userRole } = req.body;
          console.log(menu_name, link, icon, userRole);
          const query =
            "INSERT INTO menu_links (menu_name, link, icon, user_id, user_role) VALUE(?,?,?,?,?)";
          db.query(
            query,
            [menu_name, link, icon, userData.userId, userRole],
            (err, result) => {
              if (err) return res.status(500).json(err.message);

              if (result.length < 0)
                return res.status(401).json("content is empty");
              res.status(200).json("Menu Link added successfully");
            }
          );
        } else {
          res.status(401).json("You are not allow to create new pages");
        }
      }
    );
  });
  // get the value from the input
});

router.get("/", (req, res) => {
  const token = req.cookies.infoToken;

  // check if the token is valid
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, data) => {
      if (err) return res.status(401).json("Token expired");
      // get the user and check their role
      const query = "SELECT u.user_role FROM users AS u WHERE id=?";

      db.query(query, [data.userId], (err, result) => {
        if (err) return res.status(500).json(err.message);
        // user Role
        const userRole = result[0].user_role;

        // get the menu links based on the user role
        if (userRole === "admin" || userRole === "super admin") {
          console.log("userRole:", userRole);
          db.query(
            `SELECT * FROM menu_links WHERE FIND_IN_SET(?, user_role)`,
            [userRole],
            (err, result) => {
              if (err) return res.status(500).json(err);
              res.status(200).json(result);
            }
          );
        } else {
          res.json("He is a guest");
        }
      });
    });
  } else {
    db.query(
      "SELECT * FROM menu_links WHERE FIND_IN_SET(?, user_role)",
      ["guest"],
      (err, result) => {
        if (err) return res.status(500).json(err.message);
        res.status(200).json(result);
      }
    );
  }

  // const query = "SELECT u.user_role FROM users AS u WHERE u.id=?";
  // // const query = "SELECT * FROM menu_links";
  // db.query(query, [id],(err, result) => {
  //   if (err) return res.status(500).json(err.message);
  //   res.status(200).json(result);
  // });
});

module.exports = router;
