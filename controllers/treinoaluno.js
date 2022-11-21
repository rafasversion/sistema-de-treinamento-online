const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const treinoaluno = async (req, res) => {
    
  const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);

  const id_aluno = decoded.id_aluno;

  db.query(`SELECT * FROM treino WHERE id_aluno = ${id_aluno}`, (err, results) => {
  

    db.query(`SELECT * FROM aluno WHERE id_aluno = ${id_aluno}`, (err, result) => {
    
    
      db.query(`SELECT * FROM anamnese WHERE id_aluno = ${id_aluno}`, (err, resultes) => {
  
      if (!err) {
      req.anamnese = resultes[0];
      req.user = result[0]
      
      res.render("pages/treino", {results, user:req.user, anamnese:req.anamnese})
      
    
      } else {
        console.log(err);  
      }
    
    })
  })
})

}
 
module.exports = treinoaluno;
