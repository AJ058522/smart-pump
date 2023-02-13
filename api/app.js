var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

const authRouter = require("./src/auth/routes/auth.routes");
const authMiddleware = require("./src/auth/middlewares/auth.middleware");
const usersRouter = require("./src/users/routes/users.routes");
var indexRouter = require("./routes/index");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", authMiddleware.isAuthorized, usersRouter);

module.exports = app;
