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
const registeradm = require("./registeradm");
const adcexercicios = require("./exercicios");
const concluirtreino = require("./concluirtreino");
const postaluno = require("./postagensaluno")
const editpost = require("./editpost");
const editaluno = require("./editaluno");
const editanamnese = require("./editanamnese");

router.post("/register", register)
router.post("/login", login)
router.post("/postagens", postagens)
router.post("/anamnese", anamnese)
router.post("/ana", ana)
router.post("/anam", anam)
router.post("/novotreino", novotreino)
router.post("/loginadm", loginadm)
router.post("/registeradm", registeradm)
router.post("/adcexercicios", adcexercicios)
router.post("/concluirtreino", concluirtreino)
router.post("/postaluno", postaluno)
router.post("/editpost", editpost)
router.post("/editaluno", editaluno)
router.post("/editanamnese", editanamnese)
module.exports = router;