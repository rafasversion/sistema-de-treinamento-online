const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const userz = async (req, res) => {
 
  db.query("SELECT * FROM aluno", (err, result) => {
    req.user = result[0];
    if (!err) {
       
        res.render("pages/dashboard", { result })
      } else {
        console.log(err);
      }
  
  }) 
}

module.exports = userz;