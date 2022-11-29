const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const infotreino = async (req, res) => {



  const id_treino = req.params.id_treino;


    db.query(`SELECT * FROM treino WHERE id_treino = ${id_treino}`, (err, results) => {


  
    if (!err) {


     req.treino = results[0];

     console.log(results[0])

     res.render('pages/editreino', { treino:req.treino });
     
    } else {
      console.log(err);
    }
  })
}

module.exports = infotreino;