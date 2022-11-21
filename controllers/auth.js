const express = require("express");
const router = express.Router();

const register = require("./register")
const login = require("./login")
const postagens = require("./postagens")
const anamnese = require("./anamnese")
const ana = require("./ana")
const anam = require("./anam")
const novotreino = require("./novotreino")
const loginadm = require("./loginadm")
const registeradm = require("./registeradm")


router.post("/register", register)
router.post("/login", login)
router.post("/postagens", postagens)
router.post("/anamnese", anamnese)
router.post("/ana", ana)
router.post("/anam", anam)
router.post("/novotreino", novotreino)
router.post("/loginadm", loginadm)
router.post("/registeradm", registeradm)

module.exports = router;