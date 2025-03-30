const mongoose = require("mongoose");

const Stat = {
    score: Number,
    modifier: Number,
    proficentSkills: [String],
    trait: String,
};

const Weapon = {
    name: String,
    damage: String,
    properties: [String],
};

const ClassFeature = {
    recieveLevel: Number,
    name: String,
    flavorText: String,
};

const SpeciesTrait = {
    name: String,
    flavorText: String,
};

const SpellSlot = {
    level: Number,
    total: Number,
    Expended: Number,
};

const Spell = {
    level: Number,
    name: String,
    castingTime: String,
    range: String,
    duration: String,
    components: {
        verbal: Boolean,
        somatic: Boolean,
        material: Boolean,
        requiredMaterial: String,
    },
    flavorText: String,
};

const Tool = {
    name: String,
    price: String,
    ability: String,
    weight: Number,
    utilize: String,
    craft: [String],
};

const Item = {
    name: String,
    price: String,
    weight: Number,
};

const characterSchema = new mongoose.Schema({
    characterName: String,
    background: String,
    class:
    {
        name: String,
        subClassName: String,
        classFeatures: [ClassFeature],
    },
    species: {
        name: String,
        subSpeciesName: String,
    },
    level:
    {
        levelAmount: Number,
        XP: Number,
    },
    armorClass: Number,
    hitPoints: {
        current: Number,
        max: Number,
    },
    hitDice: {
        spent: Number,
        max: Number,
    },
    deathSaves: {
        successes: Number,
        failures: Number,
    },
    intiative: Number,
    speed: Number,
    size: Number,
    passivePerception: Number,
    profiencyBonus: Number,
    stats: {
        strength: Stat,
        dexterity: Stat,
        constitution: Stat,
        intelligence: Stat,
        wisdom: Stat,
        charisma: Stat,
    },
    languages: [String],
    weaponsAndDamageCantrips: [Weapon],
    heroicInspiration: Boolean,
    equipmentProficiencies: {
        armorTraining: [String],
        weapons: [Weapon],
        tools: [Tool],
    },
    speciesTraits: [SpeciesTrait],
    feats: [Feat],
    spellcasting: {
        ability: String,
        modifier: Number,
        saveDC: Number,
        attackBonus: Number,
        spellSlots: [SpellSlot],
        spells: [Spell],
    },
    appereance: String,
    backstory: String,
    alignment: {
        goodness: String,
        lawfulness: String,
        traits: [String]
    },
    coins: {
        copper: Number,
        silver: Number,
        electrum: Number,
        gold: Number,
        platinum: Number,
    },
    equipment: [Item],
});

module.exports = mongoose.model("Character", characterSchema);