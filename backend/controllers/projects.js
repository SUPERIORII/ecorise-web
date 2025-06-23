const jwt = require("jsonwebtoken");
const db = require("../database");
const moment = require("moment");
const { v4: uuid } = require("uuid");

const getProjects = (req, res) => {
  const query = `SELECT p.id AS project_id, p.title, p.description, p.project_img, p.created_date, u.id AS user_id, u.username,u.shadowname AS psudo_name, u.user_profile, u.user_role FROM project AS p JOIN users 
    AS u ON(u.id=p.user_id) ORDER BY p.created_date DESC`;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err.message);

    res.json(result);
  });
};

const addProjects = (req, res) => {
  const token = req.cookies.infoToken;
  const { title, description, projectImg } = req.body;
  // GETTING A UNIQUE ID FOR EACH PROJECT
  const ProjectUniqueId = uuid();

  jwt.verify(token, process.env.SECRET, (err, userInfo) => {
    if (err) return res.status(401).json("Session Expired!!");

    // checking if the project image is empty before storing the project in the database
    if (!projectImg)
      return res.status(400).json("Project image cannot be empty!");

    // check if post exist in the database
    const query = "SELECT * FROM project WHERE title=? || project_img=?";
    db.query(query, [title, projectImg], (err, result) => {
      if (err) return res.status(500).json(err.message);

      if (result.length || result.length > 0)
        return res.status(400).json("project already exist");

      // Store the project information in the database if all requirement is met
      const query =
        "INSERT INTO project(title,description, project_img, user_id, unique_id, created_date) VALUE(?,?,?,?,?,?)";
      db.query(
        query,
        [
          title,
          description,
          projectImg,
          userInfo.userId,
          ProjectUniqueId,
          moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        ],
        (err, result) => {
          if (err) return res.status(500).json(err.message);

          res.status(200).json("project upload has been success");
        }
      );
    });
  });
};

const fetchProjects = (req, res) => {
  const query = `SELECT p.id AS project_id, p.title, p.description, p.project_img, p.created_date, u.id AS user_id, u.username,u.shadowname AS psudo_name, u.user_profile, u.user_role FROM project AS p JOIN users 
    AS u ON(u.id=p.user_id) ORDER BY p.created_date DESC LIMIT 3`;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err.message);

    res.json(result);
  });
};

const latestProjects = (req, res) => {
  const query = "SELECT * FROM project ORDER BY created_date DESC LIMIT ?";

  db.query(query, [2], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

module.exports = {
  fetchProjects,
  addProjects,
  latestProjects,
  getProjects,
};
