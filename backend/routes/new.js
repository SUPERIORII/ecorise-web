const express = require("express");
const router = express.Router();
const {fetchnews,addNews, fetchLatestNews} = require('../controllers/news')
const db = require("../database");


router.get("/latest-news", fetchLatestNews)
router.get("/fetch-news", fetchnews)
router.post("/add-news", addNews)


module.exports = router;
