const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathDirectory = "../client/public/upload";

    if (!fs.existsSync(pathDirectory)) {
      fs.mkdirSync(pathDirectory, { recursive: true });
    } else {
      cb(null, pathDirectory);
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  // limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileType = /jpg|jpeg|png|svg/;

    const mimetype = fileType.test(file.mimetype);
    const extname = fileType.test(path.extname(file.originalname));

    // checking if the file is an image and has the filetype extension
    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb(new Error("File type is not supported"));
    }
  },
});

module.exports = upload;
