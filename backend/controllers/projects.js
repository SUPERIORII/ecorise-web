const jwt = require("jsonwebtoken");
const db = require("../database");
const moment = require("moment")

const fetchProjects = (req, res) => {
  const projects = { result: [] };
  const query = `SELECT p.id AS project_id, p.title, p.description, p.project_img, p.created_date, u.id AS user_id, u.username,u.shadowname AS psudo_name, u.user_profile, u.user_role FROM project AS p JOIN users 
    AS u ON(u.id=p.user_id) ORDER BY p.created_date DESC`;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err.message);

    result.map((project) => {
      const info = {
        projectId: project.project_id,
        title: project.title,
        description: project.description,
        projectImg: project.project_img,
        createdAt: moment(project.created_date).format("MMMM D, YYYY"),
        relativeDuration: moment(project.created_date).fromNow(),
        userId: project.user_id,
        username: project.username,
        psudoName: project.psudo_name,
        userProfile: project.user_profile,
        userRole: project.user_role,
      };

      projects.result.push(info)
    });

    res.json(projects);
  });
};

const postProjects = (req, res) => {
  const token = req.cookies.infoToken;
  const { title, description, projectImg } = req.body;

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
        "INSERT INTO project(title,description, project_img, user_id) VALUE(?,?,?,?)";
      db.query(
        query,
        [title, description, projectImg, userInfo.userId],
        (err, result) => {
          if (err) return res.status(500).json(err.message);

          res.status(200).json("project upload has been success");
        }
      );

    });

    
  });
};

// const postProjects = (req, res) => {
//   const token = req.cookies.infoToken
//   const { title , description, userId, newImg} = req.body;

//  jwt.verify(token, process.env.SECRET, (err, userInfo) => {
//    if (err) return res.status(401).json("Not Login in!!");

//    const query = "SELECT * FROM users WHERE id =?";

//    res.json(body);

//   //  db.query(query, [adminInfo.userId], (err, result) => {
//   //    if (err) return res.status(500).json(err.message);

//   //    // // check if user role is not super admin to not register new user
//   //   //  if (adminRole === "admin") {
//   //   //    res
//   //   //      .status(403)
//   //   //      .json(
//   //   //        "Access denied!! You do not have permission to register users!!"
//   //   //      );
//   //   //    return;
//   //   //  }

//   //   //  // check if user role is super admin to register new user
//   //   //  if (adminRole === "super admin") {
//   //   //    // check if the new user email is register

//   //   //    const query = "SELECT * FROM users WHERE email=?";
//   //   //    db.query(query, [email], (err, result) => {
//   //   //      if (err) return res.status(500).json(err);

//   //   //      if (result.length)
//   //   //        return res.status(409).json("Account already exist!!");

//   //   //      // register the new admin user
//   //   //      const query =
//   //   //        "INSERT INTO users(username, email, password, user_role) VALUE(?,?,?,?)";
//   //   //      db.query(query, [username, email, hashPassword, role], (err) => {
//   //   //        if (err) return res.status(500).json(err);

//   //   //        res.status(200).json("New Admin has been created");
//   //   //      });
//   //   //    });
//   //   //  }

//   //  });

// });
// };

module.exports = { fetchProjects, postProjects };
