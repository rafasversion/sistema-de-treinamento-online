const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const postagens = async (req, res) => {
    const {tipo_post, titulo_post, descricao_post, link_post} = req.body
 
                db.query('INSERT INTO postagens SET ?', {tipo_post, titulo_post, descricao_post, link_post}, (error, results) => {
                    if(error) throw error;     
                    return res.json({status:"success", success:"Sua postagem foi enviada com sucesso!"});
                })
            }
    
    


module.exports = postagens;