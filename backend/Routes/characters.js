const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const controler = require("../Controlers/characterControler");

router.get("/", controler.getCharacters);

router.post("/create", controler.createCharacter);

router.get("/:id", controler.getCharacter);

router.delete("/:id", controler.deleteCharacter);

router.patch("/:id", controler.updateCharacter);

module.exports = router;
