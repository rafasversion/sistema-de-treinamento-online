const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const userinfo = async (req, res) => {
  let id_aluno = req.params.id_aluno;
  
  db.query(`SELECT * FROM aluno WHERE id_aluno = ${id_aluno}`, (err, result) => {


    db.query(`SELECT * FROM anamnese WHERE id_aluno = ${id_aluno}`, (err, resultes) => {
  
  
    if (!err) {
     req.anamnese = resultes[0];
     req.user = result[0];
     res.render('pages/editaluno', { user:req.user });
     console.log(result[0]);
     
    } else {
      console.log(err);
    }
    console.log('Dados dos usuários cadastrados no banco: \n', result[0]);

  })
})
}

module.exports = userinfo;