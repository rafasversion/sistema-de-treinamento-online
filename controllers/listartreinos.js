const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const listtreinos = async (req, res) => {
    
  const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);

  const id_aluno = decoded.id_aluno;

  db.query(`SELECT * FROM treino WHERE id_aluno = ${id_aluno}`, (err, results) => {
  

    db.query(`SELECT * FROM aluno WHERE id_aluno = ${id_aluno}`, (err, result) => {
    if (!err) {
    
      req.user = result[0]
      res.render("pages/homealuno", { results, user:req.user })
      res.render("pages/novotreino", {user:req.user})
    
      } else {
        console.log(err);  
      }
    
    })
  })

    

}
 
module.exports = listtreinos;
