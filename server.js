require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const createError = require("http-errors");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(methodOverride("_method"));

// HOMEPAGE
app.get("/", (req, res) => {
  res.json({ message: "express api app is working" });
});

app.use("/api/quizzer", require("./controllers/quizController.js"));


app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
