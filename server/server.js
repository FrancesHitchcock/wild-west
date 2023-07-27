// boilerplate for every express server

const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

// import functions from modules

const survive = require("./library/survive");
const maths = require("./library/maths");

// create test endpoint
app.get("/", (request, response) => {
  response.json("You are looking at my root route");
});

// create endpoints for user
app.get("/survive", survive);
app.get("/maths", maths);

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
