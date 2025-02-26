const db = require("../database");

const users = (req, res) => {
  const data = req.user;

  const query = "SELECT * FROM users WHERE id =?";

  db.query(query, [data.userId], (err, result) => {
    if (err) return res.status(500).json("something went wrong...");

    const { password, ...others } = result[0];

    res.json(others);
  });
};

module.exports = { users };
