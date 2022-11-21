const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const delpost = async (req, res) => {

    let id_post = req.params.id_post;
 
    db.query(`DELETE FROM postagens WHERE id_post = ${id_post}`, async (err, result) => {
                    if(err) throw err;
                    res.redirect("/dashboard/ferramentas")
                })
            }
    
    


module.exports = delpost;