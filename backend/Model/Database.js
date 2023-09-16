const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  race: String,
  level: {
    type: Number,
    default: 1,
  },
  alignment: String,
  background: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  skills: [{
    name: String,
    proficiency: Boolean,
    modifier: Number,
  }],

  proficiencies: [String],
  hitPoints: {
    type: Number,
    default: 1,
  },
  inventory: [String], // array of items
  spells: [String],    // Array of spells
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;