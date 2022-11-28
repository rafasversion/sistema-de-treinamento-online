

const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const listexer = async (req, res) => {
db.query(`SELECT MAX(id_treino) FROM treino`, (erra, resulta) => {


    id_treino = Object.values(resulta[0])[0]
    console.log(id_treino)

    let id_aluno = req.params.id_aluno;
    db.query(`SELECT * FROM anamnese WHERE id_aluno  = '${id_aluno}'`, (er, results) => {
    db.query(`SELECT * FROM aluno WHERE id_aluno = '${id_aluno}'`, (err, result) => {
    db.query(`SELECT * FROM treino WHERE id_treino = '${id_treino}'`, (erros, resultados) => {
    db.query(`SELECT * FROM exercicios WHERE id_treino = '${id_treino}'`, (erros_, exercicios) => {

      console.log(er)
      console.log(err)
      console.log(erros)    
    req.anamnese = results[0];
    req.aluno = result[0];
    req.treino = resultados[0];
    
     console.log(req.anamnese)
     console.log(req.aluno)
     console.log(req.treino)
    return res.render("pages/exercicios", {treino:req.treino, anamnese:req.anamnese, aluno:req.aluno, exercicios})
  })
})  
})  

})
})


}

module.exports = listexer;