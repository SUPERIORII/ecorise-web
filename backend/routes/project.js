const express = require("express");
const {
  addProjects,
  fetchProjects,
  latestProjects,
  getAllProjects,
} = require("../controllers/projects");
const router = express.Router();

router.get("/fetchProject", fetchProjects);
router.get("/project", getAllProjects);
router.get("/latest-projects", latestProjects);
router.post("/addProject", addProjects);

module.exports = router;
