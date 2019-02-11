const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const axios = require("axios");
const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.get("/base", async (req, res, next) => {
  try {
    const info = await axios.get(
      `https://authorization.api.npr.org/v2/authorize?client_id=nprone_trial_g9y0aDqcdDjs&state=eft68jrd3r74fpc7Grni&redirect_uri=http://localhost:3000&response_type=code&scope=identity.readonly`
    );
  } catch (err) {
    console.error(err);
  }
});
app.use("/tokenpost", (req, res, next) => {
  console.log("route hit");
});
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
