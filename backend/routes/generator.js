const express = require("express");
const Character = require("../models/CharacterTest");
const Class = require("../models/Class");
const functions = require("../functions/functions")

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const classes = await Class.find()
    let random = functions.randomInt(0, classes.length - 1);
    res.status(200).json(classes[random])
  } catch(err) {
    res.status(400).json({ message: "Error showing class" });
    console.log(err)
  }
});


/*router.post("/", async (req, res) => {
    try {
        const newCharacter = new Character(req.body);
        await newCharacter.save();
        res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({ message: "Error creating character" });
  }
}) */

module.exports = router;
