const express = require("express");
const Character = require("../models/CharacterTest");
const router = express.Router();

// Get all characters
router.get("/", async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching characters" });
  }
});

// Create a new character
router.post("/", async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({ message: "Error creating character" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundCharacter = await Character.findById(req.params.id);
    res.status(200).json(foundCharacter);
  } catch (error) {
    res.status(400).json({ message: "Error showing character" })
  }
});


module.exports = router;
