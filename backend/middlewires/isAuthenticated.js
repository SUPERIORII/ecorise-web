const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.infoToken;

  if (!token) return res.status(401).json({error:"Unauthorized, you are not allow to see this page"});

  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err) return res.status(401).json("token expired!!");

    req.user = data;

    next();
  });
};

module.exports = isAuthenticated;
