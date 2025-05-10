const db = require("../database");

// get latest news
const getResources = (req, res) => {
  const query = `SELECT * FROM resources ORDER BY created_date DESC LIMIT ?`;

  db.query(query, [2], (err, result) => {
    if (err) return res.status(500).json(err.message);
    return res.status(200).json(result);
  });
};

// get all news
const getAllResources = (req, res) => {
  const query = `SELECT * FROM resources ORDER BY created_date DESC`;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err.message);
    return res.status(200).json(result);
  });
};

module.exports = { getResources, getAllResources };
