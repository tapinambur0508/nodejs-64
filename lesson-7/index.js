require("dotenv").config();

const express = require("express");

require("./db");

const app = express();

const routes = require("./routes");

app.use(routes);

app.listen({ port: 8080 }, () => {
  console.log("Server is running on port 8080");
});
