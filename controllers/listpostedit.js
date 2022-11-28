const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const listpostsedit = async (req, res) => {

  
      let id_post = req.params.id_post;
      db.query(`SELECT * FROM postagens WHERE id_post = ${id_post}`, (erro, posts) => {
  
      
    if (!erro) {
        req.post = posts[0];
        res.render("pages/editpost", {post:req.post})
      } else {
        console.log(erro);  
      }
    })

}
 
module.exports = listpostsedit;
