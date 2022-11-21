const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const listposts = async (req, res) => {
 
db.query("SELECT * FROM postagens", (err, result) => {
  
    if (!err) {
    
        console.log(result);
        res.render("pages/ferramentas", {result})
    
      } else {
        console.log(err);  
      }
    
    })

    

}
 
module.exports = listposts;
