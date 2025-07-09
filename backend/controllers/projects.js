const jwt = require("jsonwebtoken");
const db = require("../database/pool");
const moment = require("moment");
const { v4: uuid } = require("uuid");

const getProjects = async (req, res) => {
  try {
    const [projects] =
      await db.query(`SELECT p.id AS project_id, p.title, p.description, p.project_img, p.created_date, u.id AS user_id, u.username,u.shadowname AS psudo_name, u.user_profile, u.user_role FROM project AS p JOIN users 
    AS u ON(u.id=p.user_id) ORDER BY p.created_date DESC`);

    console.log(projects);
  } catch (err) {
    if (err) return res.status(500).json(err.message);
  }
};

const addProjects = async (req, res) => {
  const { title, description, projectImg } = req.body;
  // retrieve user id from the jwt authentication
  const userId = req.user.userId;
  const ProjectUniqueId = uuid();

  // check required missing field
  if (!title || !projectImg) {
    return res.status(400).json({ error: "Required field are missing" });
  }

  try {
    // check if post exist in the database
    const [isProjectExist] = await db.query(
      "SELECT title, project_img FROM project WHERE title=? OR project_img=?",
      [title, projectImg]
    );

    if (isProjectExist.length > 0) {
      return res.status(400).json({
        error:
          "Project already exist, please choose a different project to upload",
      });
    }
    // Store the project information in the database if all requirement is met
    const [insertProject] = await db.query(
      "INSERT INTO project(title,description, project_img, user_id, unique_id, created_date) VALUE(?,?,?,?,?,?)",
      [
        title,
        description,
        projectImg,
        userId,
        ProjectUniqueId,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      ]
    );

    // show a message that the file is uploaded successfully
    if (insertProject.affectedRows > 0) {
      res.status(200).json({ message: "project uploaded successfully" });
    }

    //   , (err, result) => {
    // });
    //   (err, result) => {
    //     if (err) return res.status(500).json(err.message);
    //     res.status(200).json("project upload has been success");
    //   }
    // );
  } catch (error) {
    res.json({ error: "Server Error" });
    console.log("Internal server error");
  }
  // GETTING A UNIQUE ID FOR EACH PROJECT

  // checking if the project image is empty before storing the project in the database
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
