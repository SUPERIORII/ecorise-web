const express = require("express");
const { users, getUser, updateProfile } = require("../controllers/users");
const router = express.Router();
const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get("/user", users);
router.get("/user/find/:psudoname", getUser);
router.patch("/user", updateProfile);

module.exports = router;
