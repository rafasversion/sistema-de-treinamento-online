const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const postsaluno = async (req, res) => {
const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);

const id_aluno = decoded.id_aluno;


  db.query(`SELECT * FROM aluno WHERE id_aluno = ${id_aluno}`, (erra, resulta) => {
  db.query("SELECT * FROM postagens", (err, result) => {
 

 
    if (!err) {
    req.user = resulta[0];
        console.log(result);
        res.render("pages/postagens", {result, user:req.user})
      } else {
        console.log(err);  
      }
    })
})

}
 
module.exports = postsaluno;
