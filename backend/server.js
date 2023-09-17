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
    res.status(200).json(characters);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
app.post("/", async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(200).json(character);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const character = await Character.findById(id);
    if (character) {
      res.status(200).json(character);
    }
  } catch (err) {
    res.status(404).json(err);
  }
});
