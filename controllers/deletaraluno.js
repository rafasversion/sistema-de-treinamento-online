const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const delaluno = async (req, res) => {

    let id_aluno = req.params.id_aluno;
 
    db.query(`DELETE FROM aluno WHERE id_aluno = ${id_aluno}`, async (err, result) => {
                    if(err) throw err;
                    res.redirect("/dashboard")
                })
            }
    
    


module.exports = delaluno;