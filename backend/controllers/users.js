const db = require("../database");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const users = (req, res) => {
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

const allUsers =()=>{
  
}

module.exports = { users, getUser, updateProfile };
