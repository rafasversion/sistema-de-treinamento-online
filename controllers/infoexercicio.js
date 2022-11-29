const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const infoexercicio = async (req, res) => {



  const id_exercicio = req.params.id_exercicio;


    db.query(`SELECT * FROM exercicios WHERE id_exercicio = ${id_exercicio}`, (err, results) => {


  
    if (!err) {


     req.exercicio = results[0];

     console.log(results[0])

     res.render('pages/editexercicio', { exercicio:req.exercicio });
     
    } else {
      console.log(err);
    }
  })
}

module.exports = infoexercicio;