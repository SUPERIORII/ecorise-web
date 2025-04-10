const express = require("express");
const { addProjects, fetchProjects } = require("../controllers/projects");
const router = express.Router();

router.get("/fetchProject", fetchProjects);
router.post("/addProject", addProjects);

module.exports = router;