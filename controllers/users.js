const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const viewall = async (req, res) => {
 
db.query("SELECT * FROM aluno", (err, result) => {
    req.user = result[0];
    if (!err) {
    
      
      } else {
        console.log(err);
      }

      let query = "SELECT COUNT(id_aluno) AS id_count FROM aluno"

  db.query(query, (err, rows) => {
    if(err) throw err;

    console.log(rows);
    
    db.query("SELECT COUNT(id_post) AS id_postcount FROM postagens", (error, results) => {

      req.post = results[0];

      db.query("select * from treino inner join aluno on treino.id_treino = aluno.id_aluno;", (error, resultes) => {

        db.query("SELECT COUNT(id_treino) AS id_treinocount FROM treino", (error, resultados) => {

          db.query("SELECT COUNT(status_treino) FROM treino WHERE status_treino =  'Incompleto'", (error, status) => {

      req.treino = resultados[0];

      req.status = Object.values(status[0])[0]
     
   res.render("pages/dashboard", {result, rows, results, resultes, resultados, treino:req.treino, status: req.status})
  
})
    })
  })
})
  })
})
}


  
  




module.exports = viewall;