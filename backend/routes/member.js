const express = require("express");
const { getLatestMembers, getAllembers } = require("../controllers/members");
const router = express.Router();

router.get("/", getAllembers);
router.get("/featured", getLatestMembers);

module.exports = router;
