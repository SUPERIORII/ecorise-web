const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  // connect to the database and fetch the news data
  const query = `SELECT * FROM news`;
  const data = { data: [] };
  db.query(query, function (err, result) {
    if (err) return res.json("field to fetch news", err.message);

    if (result.length === 0)
      return res.json("there is No data in the database");

    result.forEach((news) => {
      data.data.push(news);

      res.json(data);
    });
  });
});

router.post("/", (req, res) => {

  console.log(req.body);
  

  // res.json(data);
});

module.exports = router;
