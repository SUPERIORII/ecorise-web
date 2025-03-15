const db = require("../database");


const users = (req, res) => {
  const data = req.user;

  const query = "SELECT * FROM users WHERE id =?";

  db.query(query, [data.userId], (err, result) => {
    if (err) return res.status(500).json("something went wrong...");

    const { password, ...others } = result[0];

    // res.json(others);

    res.json(others);
  });
};

const getUser = (req, res) => {
  const psudoname = req.params.psudoname;

  const query = "SELECT * FROM users WHERE shadowname=?";

  db.query(query, [psudoname], (err, result) => {
    if (err) return res.status(500).json("something went wrong...");

    const { password, ...others } = result[0];

    res.status(200).json(others);
  });
};

module.exports = { users, getUser };
