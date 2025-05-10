const express = require("express");
const router = express.Router();
const {fetchnews,addNews,getNews, fetchLatestNews, getSingleNews} = require('../controllers/news')
const db = require("../database");


router.post("/add-news", addNews)
router.get("/getnews", getNews);
router.get("/singlenews", getSingleNews);
router.get("/latest-news", fetchLatestNews)
router.get("/fetch-news/search", fetchnews)


module.exports = router;
