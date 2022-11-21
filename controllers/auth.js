const express = require("express");
const router = express.Router();

const register = require("./register")
const login = require("./login")
const postagens = require("./postagens")
const anamnese = require("./anamnese")
const novotreino = require("./novotreino")

router.post("/register", register)
router.post("/login", login)
router.post("/postagens", postagens)
router.post("/anamnese", anamnese)
router.post("/novotreino", novotreino)

module.exports = router;