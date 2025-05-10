const express = require("express")
const router = express.Router()
const {getResources, getAllResources} =require("../controllers/resources")

router.get("/latest-resources", getResources )
router.get("/full-resources", getAllResources);

module.exports = router