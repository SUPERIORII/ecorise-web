const express = require("express");
const {  addUser, getUser,user, updateProfile, allUsers } = require("../controllers/users");
const router = express.Router();
const cookieParser = require("cookie-parser");
const upload = require("../middlewires/upload")

router.use(cookieParser());

router.get("/user/find/:psudoname", getUser);
router.get("/getusers", allUsers);


router.get("/user", user);
router.post("/user", addUser);
router.patch("/user", updateProfile);

module.exports = router;
