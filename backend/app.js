const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); // Import cookie-parser

// Using cors for validation
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

//IMPORT ROUTES
const user = require("./controller/user")

app.use("/api/v2/user", user)

// Used for error handling
app.use(ErrorHandler);

// Test route
app.use("/test", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
