const express = require("express");
// const ErrorHandler = require("./middleware/error");
const app = express();
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// app.use(express.json());
// app.use(cookieParser());
// // Cross-origin resource sharing
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
// https://expressjs.com/en/4x/api.html#express.static
// app.use("/", express.static("uploads"));
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config .env path 
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}
// // import routes
// const user = require("./controller/user");
// app.use("/api/v2/user", user);
// it's for ErrorHandling
// app.use(ErrorHandler);
module.exports = app;