const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const listtreinos = async (req, res) => {
    
  const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);

  const id_aluno = decoded.id_aluno;

  db.query(`SELECT * FROM treino WHERE id_aluno = ${id_aluno}`, (err, results) => {
  
 

    
    db.query(`SELECT * FROM aluno WHERE id_aluno = ${id_aluno}`, (err, result) => {
    
    
      db.query(`SELECT * FROM anamnese WHERE id_aluno = ${id_aluno}`, (err, resultes) => {

        db.query(`SELECT * FROM postagens WHERE tipo_post = 'Avisos'`, (err, result_aviso) => {

          db.query(`SELECT * FROM postagens WHERE tipo_post = 'Dicas'`, (err, result_dica) => {

            db.query(`SELECT * FROM postagens WHERE tipo_post = 'Lives'`, (err, result_live) => {

          
      if (!err) {
      req.anamnese = resultes[0];
      req.user = result[0];
      console.log(result_aviso)
      return res.render("pages/homealuno", { results, user:req.user, anamnese:req.anamnese, result_aviso, result_dica, result_live})

      
      } else {
        console.log(err);  
      }
    
    
    })
  })
  })
  })
})
})

}
 
module.exports = listtreinos;
