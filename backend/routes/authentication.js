const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authentication");
const {isAuthenticated} = require("../controllers/isAuthenticated")


router.post("/register" ,register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
