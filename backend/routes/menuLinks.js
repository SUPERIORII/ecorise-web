const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM menu_links";
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err.message);
    res.status(200).json(result);
  });
});

module.exports = router;
