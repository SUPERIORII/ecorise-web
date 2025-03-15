const { json } = require("body-parser");
const db = require("../database");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// uploading news
const addNews = (req, res) => {
  const token = req.cookies.infoToken;
  const { title, description, newsImg } = req.body;

  jwt.verify(token, process.env.SECRET, (err, userInfo) => {
    if (err) return res.status(401).json("Session Expired!!");

    // checking if the project image is empty before storing the project in the database
    if (!newsImg) return res.status(400).json("Project image cannot be empty!");

    // check if news exist in the database
    const query = "SELECT * FROM news WHERE title=? || news_img=?";
    db.query(query, [title, newsImg], (err, result) => {
      if (err) return res.status(500).json(err.message);

      if (result.length || result.length > 0)
        return res.status(400).json("project already exist");

      // Store the project information in the database if all requirement is met
      const query =
        "INSERT INTO news(title,description, user_id, news_img ) VALUE(?,?,?,?)";
      db.query(
        query,
        [title, description, userInfo.userId, newsImg],
        (err, result) => {
          if (err) return res.status(500).json(err.message);

          res.status(200).json("news upload has been successful");
        }
      );
    });
  });
};

// getting a single latest news
const fetchLatestNews = (req, res) => {
  const latestNews = { result: [] };
  const query = "SELECT * FROM news ORDER BY created_date DESC LIMIT ?";

  db.query(query, [1], (err, result) => {
    if (err) return res.status(500).json(err.message);

    result.map((news) => {
      const info = {
        newsId: news.id,
        title: news.title,
        description: news.description,
        // userId: news.user_id,
        createdDate: moment(news.created_date).format("MMMM D, YYYY"),
        relativeTime: moment(news.created_date).fromNow(),
        newsTime: moment(news.created_date).format("hh:mm"),
        newsImg: news.news_img,
      };

      latestNews.result.push(info);
      
    });
    res.status(200).json(latestNews.result);
  });
};

const fetchnews = (req, res) => {
  const news = { result: [] };
  const query =
    "SELECT * FROM news ORDER BY created_date DESC LIMIT ? OFFSET 1";

  db.query(query, [1000], (err, result) => {
    if (err) return res.status(500).json(err.message);

    result.map((allNews) => {
      const info = {
        newsId: allNews.id,
        title: allNews.title,
        description: allNews.description,
        // userId: news.user_id,
        createdDate: moment(allNews.created_date).format("MMMM D, YYYY"),
        relativeTime: moment(allNews.created_date).fromNow(),
        newsTime: moment(allNews.created_date).format("hh:mm"),
        newsImg: allNews.news_img,
      };

      news.result.push(info);
    });

    res.status(200).json(news.result);
  });
};

module.exports = { fetchLatestNews, fetchnews, addNews };
