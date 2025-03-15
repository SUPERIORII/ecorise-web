const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")




// middlewares
app.use(cookieParser())

app.use(bodyParser.json());
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
// require routes
const newRoute = require("./routes/new");
const authRoute = require("./routes/authentication");
const userRoute = require("./routes/user")
const projectRoute = require("./routes/project")

// Routes
app.use("/api/auth", authRoute);
app.use("/api/news", newRoute);
app.use("/api", userRoute)
app.use("/projects", projectRoute)

app.get("/", (req, res) => {
  res.send("Server is running");
});


// const formatDate = time.format("MMM Do YYY, h:mm:ss a")
// console.log(formatDate);
// console.log(time);





app.listen(3000, console.log("server is listening on port 3000"));
