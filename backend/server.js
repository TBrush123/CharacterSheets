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

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const characters = await Character.find();
    res.send(characters);
  } catch (err) {
    console.log(err);
  }
});
app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const character = await Character.create(req.body);
    res.status(200).json(character);
  } catch (err) {
    res.status(400).json({error: err});
  }
});
