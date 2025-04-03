const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: String,
  race: String,
  class: String,
  background: String,
  stats: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
  },
});

module.exports = mongoose.model("Character", CharacterSchema);