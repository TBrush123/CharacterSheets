const functions = require("./functions");
const Class = require("../models/Class");

const pickClass = async () => {
    const classes = await Class.find();

    return classes[functions.randomInt(0, classes.length)].name;
};

module.exports = {pickClass};