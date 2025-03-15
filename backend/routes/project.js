const express = require("express");
const { postProjects, fetchProjects } = require("../controllers/projects");
const router = express.Router();

router.get("/fetchProject", fetchProjects);
router.post("/addProject", postProjects);

module.exports = router;