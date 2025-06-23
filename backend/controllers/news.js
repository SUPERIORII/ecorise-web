const db = require("../database");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const { v4: uuid } = require("uuid");

// uploading news
const addNews = (req, res) => {
  const token = req.cookies.infoToken;
  const { title, description, category, newsImg } = req.body;
  const newsSlug = uuid();

  console.log(newsSlug);

  jwt.verify(token, process.env.SECRET, (err, userInfo) => {
    if (err) return res.status(401).json("Session Expired!!");

    // checking if the project image is empty before storing the project in the database
    if (!newsImg)
      return res.status(400).json("NewS field image cannot be empty!");

    // check if news exist in the database
    const query = "SELECT * FROM news WHERE title=? || news_img=?";
    db.query(query, [title, newsImg], (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length || result.length > 0)
        return res.status(400).json("news already exist");

      // Store the project information in the database if all requirement is met
      const query =
        "INSERT INTO news(title,description, category, user_id, news_slug, news_img, created_date) VALUE(?,?,?,?,?,?,?)";
      db.query(
        query,
        [
          title,
          description,
          category,
          userInfo.userId,
          newsSlug,
          newsImg,
          moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        ],
        (err, result) => {
          if (err) return res.status(500).json(err.message);

          res.status(200).json("news upload has been successful");
        }
      );
    });
  });
};

// getting news
const getNews = (req, res) => {
  const query = `SELECT n.*, u.id AS userId, 
  u.username, u.shadowname FROM news n JOIN users u ON(n.user_id =u.id)
   ORDER BY created_date DESC`;
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err.message);
    res.status(200).json(result);
  });
};

// getting latest news
const latestNews = (req, res) => {
  const query = "SELECT * FROM news ORDER BY created_date DESC LIMIT ?";

  db.query(query, [3], (err, result) => {
    if (err) return res.status(500).json(err.message);
    res.status(200).json(result);
  });
};

// searching for specific news
const specificNews = (req, res) => {
  const egid = req.query.egid;

  console.log(egid);
  const q = "SELECT * FROM news WHERE news_slug=?";

  // const secondQuery =
  //   "SELECT * FROM news WHERE category LIKE ? ORDER BY created_date DESC";

  db.query(q, [egid], (err, result) => {
    if (err) return res.status(500).json(err.message);

    res.status(200).json(result[0]);
  });
};

// const getSingleNews = (req, res) => {
//   // const s = req.query.s || null;
//   const id = req.query.id;

//   const q = "SELECT * FROM news WHERE id=?";

//   db.query(q, [id], (err, result) => {
//     if (err) return res.status(500).json(err.message);

//     res.status(200).json(result[0]);
//   });
// };

module.exports = {
  addNews,
  getNews,
  specificNews,
  latestNews,
  // getSingleNews,
};
