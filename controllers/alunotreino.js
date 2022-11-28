const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const novotreino = async (req, res) => {



  const id_aluno = req.params.id_aluno;
 
  db.query(`SELECT * FROM aluno WHERE id_aluno = ${id_aluno}`, (err, result) => {

    db.query(`SELECT * FROM anamnese WHERE id_aluno = ${id_aluno}`, (err, resultes) => {

  
    if (!err) {


     req.anamnese = resultes[0];    
     req.aluno = result[0];
     res.render('pages/novotreino', { aluno: req.aluno, anamnese:req.anamnese });
     console.log(result[0]);
     
    } else {
      console.log(err);
    }
    console.log('Dados dos usuários cadastrados no banco: \n', result[0]);
  
})
  })
}

module.exports = novotreino;