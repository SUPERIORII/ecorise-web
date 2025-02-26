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
const newRoute = require("./routes/newRoute");
const authRoute = require("./routes/authentication");
const userRoute = require("./routes/user")

// Routes
app.use("/api/auth", authRoute);
app.use("/egi/api/news", newRoute);
app.use("/api/find", userRoute)

app.get("/", (req, res) => {
  res.send("Server is running");
});



app.listen(3000, console.log("server is listening on port 3000"));
