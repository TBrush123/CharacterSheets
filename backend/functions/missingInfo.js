const functions = require("./functions");
const Class = require("../models/Class");

const pickClass = async () => {
    const classes = await Class.find();

    return classes[functions.randomInt(0, classes.length)].name;
};

const shuffle = (array) => {
    let newArray = [];
    const initialLength = array.length;

    for(let i = 0; i < initialLength; i++) {
        newArray.push(array.splice(functions.randomInt(0, array.length), 1))
    };

    return newArray;    
};

const assignAttributes = (className) => {
    let mainStats = className.primaryAbility;
    let remainingAttributes = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]
        .filter(stat => !mainStats.includes(stat))
    remainingAttributes = shuffle(remainingAttributes);

    let statAttributes = mainStats.concat(remainingAttributes);

    return statAttributes;
};
const assignAndPretify = (statAttributes, statValues) => {
    let stats = {};

    statAttributes.forEach(element => {
        stats[element] = statValues.shift();
    });
    
    let prettyStatsSchema = {
        strength: null,
        dexterity: null,
        constitution: null,
        intelligence: null,
        wisdom: null,
        charisma: null,
    };

    const prettyStats = Object.assign(prettyStatsSchema, stats);

    return prettyStats;
}
const generateStandardArray = (className) => {
    const statAttributes = assignAttributes(className); 
    let standardArray = [15, 14, 13, 12, 10, 8];
   
    return assignAndPretify(statAttributes, standardArray)

};

const roll4d6 = () => {
    let values = [];
    for(let i = 0; i < 4; i++) {
        values.push(functions.randomInt(1, 7)); 
    };
    values.sort((a,b) => {return a-b});

    const left = values.shift();
    
    let sum = 0;
    values.forEach(element => sum += element);

    return sum;
};

const generateRolled = (className) => {
    const statAttributes = assignAttributes(className);

    let rolledValues = [];
    for(let i = 0; i < 6; i++) {
        rolledValues.push(roll4d6());
    }

    rolledValues.sort((a,b) => {return b-a});

    return assignAndPretify(statAttributes, rolledValues);

};

const generatePointBuy = (className) => {
    return;    
}

let clAss = {name: "Paladin", primaryAbility: ["strength", "charisma"]};


console.log(generateRolled(clAss));
module.exports = {pickClass};