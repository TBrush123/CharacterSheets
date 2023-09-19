const mongoose = require("mongoose");
const Character = require("../Model/Database")


// GET all characters

const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.status(200).json(characters);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

//POST a new character

const createCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(200).json(character);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

//GET a single character

const getCharacter = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.isValidObjectId(id)) {
      throw { message: "No such sheet was found" };
    }
    const character = await Character.findById(id);
    res.status(200).json(character);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

//DELETE single character

const deleteCharacter = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.isValidObjectId(id)) {
      throw { message: "No such sheet was found" };
    }
    const character = await Character.findByIdAndDelete(id);
    res.status(200).json(character);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

//PATCH a character

const updateCharacter = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.isValidObjectId(id)) {
      throw { message: "No such sheet was found" };
    }

    const character = await Character.findByIdAndUpdate(id, { ...req.body });

    if (!character) {
      throw { message: "No such sheet was found" };
    } else {
      res.status(200).json(character);
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err });
  }
};

module.exports = {
  getCharacters,
  createCharacter,
  getCharacter,
  deleteCharacter,
  updateCharacter
}