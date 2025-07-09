const express = require("express");
const router = express.Router();
const {
  addNews,
  getNews,
  specificNews,
  latestNews,
  // getSingleNews,
  // fetchnews,
} = require("../controllers/news");
const db = require("../database/database");

router.get("/", getNews);
router.post("/", addNews);

// first 3 latest news
router.get("/latestNews", latestNews);

// Get specific News by their by the news slug
router.get("/eginews", specificNews);

// router.get("/fetch-news/search", fetchnews)

module.exports = router;
