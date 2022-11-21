const express = require("express");
const loggedin = require("../controllers/loggedin")
const router = express.Router();
const logout = require("../controllers/logout")
const viewall = require("../controllers/users")
const viewuser = require("../controllers/user")
const listposts = require("../controllers/listarpostagens")
const delpost = require("../controllers/deletarpostagem")
const delaluno = require("../controllers/deletarpostagem")
const db = require("./config_db");
const novotreino = require("../controllers/alunotreino")
const register = require("../controllers/register")
const listtreino = require("../controllers/listartreinos")
const treinoaluno = require("../controllers/treinoaluno")
const loggedinadm = require("../controllers/loggedinadm")
const logoutadm = require("../controllers/logoutadm")


router.get("/", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/index", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/index", {status: "no", user:"nothing"});
    }
})

router.get("/registro", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/registro", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/registro", {status: "no", user:"nothing"});
    }
})

router.get("/registroadm", loggedinadm, (req, res) => {
    if (req.adm){
        res.render("pages/registeradm", {status: "loggedin", adm:req.adm}); 
    } else {
        res.render("pages/registeradm", {status: "no", user:"nothing"});
    }
})

router.get("/aluno/anamnese", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/anamnese", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/anamnese", {status: "no", user:"nothing"});
    }
})

router.get("/aluno/ana", loggedin, (req, res) => {

    if (req.user){
        res.render("pages/anamnesep", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/anamnesep", {status: "no", user:"nothing"});
    }
})

router.get("/aluno/treinos", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/alunotreinos", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/alunotreinos", {status: "no", user:"nothing"});
    }
})

router.get("/aluno/postagens", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/postagens", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/postagens", {status: "no", user:"nothing"});
    }
})



router.get("/cadastrado", register)

router.get("/posts", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/postagens", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/postagens", {status: "no", user:"nothing"});
    }
})

router.get("/login", loggedin, (req, res) => {
    if (req.user){
        res.redirect("/aluno/home");
    } else {
        res.render("pages/login", {status: "no", user:"nothing"});
    }
})

router.get("/loginadm", loggedinadm, (req, res) => {
    if (req.adm){
        res.redirect("/dashboard");
    } else {
        res.render("pages/loginadm", {status: "no", adm:"nothing"});
    }
})


router.get("/profile", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/profile", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/profile", {status: "no", user:"nothing"});
    }
})

router.get("/aluno/home", listtreino, (req, res) => {
  res.render("pages/homealuno", { results, user:req.user, anamnese:req.anamnese, result_aviso}); 
    
})

router.get("/aluno/treino", treinoaluno, (req, res) => {
    res.render("pages/treino", { results, user:req.user, anamnese:req.anamnese}); 
      
  }) 



router.get("/dashboard", viewall, (req, res) => {
    res.render("pages/dashboard", {
        rows,
        result,
        results,
        resultes,
        resultados,
        treino:req.treino,
        status
    })
   
});

router.get("/dashboard/alunos", viewall, (req, res) => {
    res.render("pages/dashboard", {
        rows,
        result
    })
});

router.get("/dashboard/ferramentas", listposts, (req, res) => {
    res.render("pages/ferramentas", {result})
})

router.get("/viewuser/:id", viewuser, (req, res) =>{
  //  res.render("viewuser", {result: result[0]})
});

router.get("/dashboard/aluno/:id_aluno", viewuser, (req, res) =>{
    // res.render("alunoinfo", {result: result[0]})
  });

router.get("/dashboard/aluno/novotreino/:id_aluno", novotreino, (req, res) =>{
        res.render("pages/novotreino", { anamnese:req.anamnese}); 
  });



router.get("/user", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/user", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/user", {status: "no", user:"nothing"});
    }
})

router.get("/deletarpost/:id_post", delpost)
router.get("/deletaraluno/:id_aluno", delaluno)

router.get("/logout", logout)
router.get("/logoutadm", logoutadm)


module.exports = router;