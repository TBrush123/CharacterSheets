require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Character = require("./Model/Database");

mongoose
  .connect(process.env.uri, {
    usenewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(process.env.PORT, () => {
      console.log(process.env.PORT);
    })
  )
  .catch((error) => console.log(error));
app.get("/", (req, res) => {
  Character.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
