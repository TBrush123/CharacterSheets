const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: String,
  hit_die: Number,
  primary_ability: String,
});

module.exports = mongoose.model("Class", classSchema);
