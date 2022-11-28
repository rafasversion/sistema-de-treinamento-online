const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const editpost = async (req, res) => {
    const { id_post, tipo_post, titulo_post, descricao_post, link_post } = req.body

 
                db.query(`UPDATE postagens 
                SET tipo_post = '${tipo_post}', 
                titulo_post = '${titulo_post}', 
                descricao_post = '${descricao_post}',
                link_post = '${link_post}'
                WHERE id_post = ${id_post}`, (error, results) => {
                    if(error) throw error;
                    console.log(id_post)
                    console.log(results)
                    return res.json({status:"success", success:"Sua postagem foi editada com sucesso!"});
                })        
               
    }

module.exports = editpost;