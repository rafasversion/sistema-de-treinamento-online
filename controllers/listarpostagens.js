const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const listposts = async (req, res) => {

  db.query("SELECT * FROM postagens", (err, result) => {
  db.query("SELECT * FROM treino", (erro, results) => {
  
    
    var test = results.map(id => ({value: id.id_treino}))
    var id = Object.values(test[0])[0]
    console.log('test', test)
    console.log('id', id)
    db.query(`SELECT * FROM exercicios`, (erro, exercicios) => {

    
    if (!err) {
    
        console.log('result', result);
        res.render("pages/ferramentas", {result, results, exercicios})
      } else {
        console.log(err);  
      }
    
})
  })
  })
}
 
module.exports = listposts;
