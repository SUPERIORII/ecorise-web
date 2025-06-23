const express = require("express");
const {
  addProjects,
  fetchProjects,
  latestProjects,
  getProjects,
} = require("../controllers/projects");
const router = express.Router();

router.post("/", addProjects);
router.get("/", getProjects);

// additional route to be spe
router.get("/fetchProject", fetchProjects);
router.get("/latest-projects", latestProjects);

module.exports = router;
