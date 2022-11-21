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

      db.query("SELECT * FROM treino", (error, resultes) => {

        db.query("SELECT COUNT(id_treino) AS id_treinocount FROM treino", (error, resultados) => {

      req.treino = resultados[0];

      db.query("SELECT COUNT(status_treino) FROM treino GROUP BY status_treino HAVING COUNT(status_treino) = 'Incompleto'", (error, result_status) => {

        req.status = result_status[0];
        status_c = result_status[0]

      db.query("SELECT COUNT(id_post) AS id_postcount FROM postagens", (error, results) => {
   res.render("pages/dashboard", {result, rows, results, resultes, resultados, treino:req.treino, status_c})
    })
  })
})
    })
  })
})
})
}


  
  




module.exports = viewall;