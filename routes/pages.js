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
const logoutadm = require("../controllers/logoutadm");
const adcexercicios = require("../controllers/exercicios");
const listexer = require("../controllers/listexer");
const concluirtreino = require("../controllers/concluirtreino");
const postsaluno = require("../controllers/postagensaluno");
const listpostsedit = require("../controllers/listpostedit");
const userinfo = require("../controllers/userinfos");
const perfil = require("../controllers/perfil");
const listperfil = require("../controllers/listperfilinfo");
const anamneseinfo = require("../controllers/anamneseinfo");
const listanamnese = require("../controllers/listanamnese");
const infotreino = require("../controllers/infotreino");
const infoexercicio = require("../controllers/infoexercicio");

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

router.get("/aluno/postagens", postsaluno, (req, res) => {
    if (req.user){
        res.render("pages/postagens", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/postagens", {status: "no", user:"nothing"});
    }
})



router.get("/cadastrado", register)

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


router.get("/aluno/perfil", perfil, (req, res) => {
    if (req.user){
        res.render("pages/profile", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/profile", {status: "no", user:"nothing"});
    }
})

router.get("/aluno/perfil/editar", listperfil, (req, res) => {
    if (req.user){
        res.render("pages/editperfil", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/editperfil", {status: "no", user:"nothing"});
    }
})


router.get("/aluno/perfil/anamnese/editar", listanamnese, (req, res) => {
    if (req.user){
        res.render("pages/editanamnese", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/editanamnese", {status: "no", user:"nothing"});
    }
})

router.get("/aluno/home", listtreino, (req, res) => {
  res.render("pages/homealuno", { results, user:req.user, anamnese:req.anamnese, result_aviso}); 
    
})

router.get("/aluno/treino", treinoaluno, (req, res) => {
    res.render("pages/treino", { results, user:req.user, anamnese:req.anamnese, exercicios }); 
      
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

router.get("/dashboard/postagens/editar/:id_post", listpostsedit, (req, res) => {
    res.render("pages/editpost", {post:req.post})
})

router.get("/viewuser/:id", viewuser, (req, res) =>{
  //  res.render("viewuser", {result: result[0]})
});

router.get("/dashboard/aluno/:id_aluno", viewuser, (req, res) =>{
    // res.render("alunoinfo", {result: result[0]})
  });

router.get("/dashboard/aluno/editar/:id_aluno", userinfo, (req, res) =>{
    // res.render("alunoinfo", {result: result[0]})
  });

  router.get("/dashboard/aluno/anamnese/editar/:id_aluno", anamneseinfo, (req, res) =>{
    // res.render("alunoinfo", {result: result[0]})
  });


router.get("/dashboard/aluno/novotreino/:id_aluno", novotreino, (req, res) =>{
        res.render("pages/novotreino", { aluno: req.aluno, anamnese:req.anamnese}); 
        
  });

  router.get("/dashboard/aluno/novotreino/exercicios/:id_aluno", listexer, (req, res) =>{
    res.render("pages/exercicios", { aluno: req.aluno, anamnese:req.anamnese, treino:req.treino, exercicios}); 
});

router.get("/dashboard/treino/editar/:id_treino", infotreino, (req, res) => {
    res.render("pages/editreino", { treino:req.treino }); 
})

router.get("/dashboard/exercicio/editar/:id_exercicio", infoexercicio, (req, res) => {
    res.render("pages/editreino", { exercicio:req.exercicio }); 
})

router.get("/user", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/user", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/user", {status: "no", user:"nothing"});
    }
})

router.get("/deletarpost/:id_post", delpost)
router.get("/deletaraluno/:id_aluno", delaluno)
router.get("/concluirtreino/:id_treino", concluirtreino)
router.get("/logout", logout)
router.get("/logoutadm", logoutadm)


module.exports = router;