const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const upload = require("./middlewires/upload");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadPath = "../client/public/upload";

//     !fs.existsSync(uploadPath)
//       ? fs.mkdirSync(uploadPath)
//       : cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     const fileType = /jpg|jpeg|png|svg/;

//     const extname = fileType.test(fileType);
//     //  check if the file has the above extension
//     console.log(extname);

//     if (extname) return cb(null, true);
//     console.log("upload image only");
//   },
// });

// middlewares

app.use(cookieParser());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "upload")));
// app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/upload", express.static(path.join(__dirname, "upload")));
// require routes
const newRoute = require("./routes/new");
const authRoute = require("./routes/authentication");
const userRoute = require("./routes/user");
const projectRoute = require("./routes/project");
const membersRoute = require("./routes/member");
const menuLinksRoute = require("./routes/menuLinks");
const db = require("./database");

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.json("upload successful");
  console.log(req.file);
});

app.use("/api/links", menuLinksRoute);
// Routes
app.use("/api/auth", authRoute);
app.use("/api/news", newRoute);
app.use("/api", userRoute);
app.use("/api/projects", projectRoute);
app.use("/api/members", membersRoute);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/item", (req, res) => {
  const page = parseInt(req.query.page);
  const item = parseInt(req.query.item);
 const limit = 10;

  const offSet = (page - 1) * limit;

  console.log(`page number:${page}`);
  console.log(`skep row number: ${offSet}`);

  const query = "SELECT * FROM project LIMIT ?,?";

  db.query(query, [offSet, item], (err, result) => {
    if (err) return res.status(500).json(err.message);

    return res.json(result);
  });
});

app.listen(3000, console.log("server is listening on port 3000"));
