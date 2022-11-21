const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const ana = async (req, res) => {
    const { comorbidade_familiar, uso_medicacao, patologia } = req.body
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
    const id_aluno = decoded.id_aluno

    db.query('SELECT id_aluno FROM anamnese WHERE id_aluno = ?', [id_aluno], async (err, result) => {
        if (err) throw err;
       
                db.query(`UPDATE anamnese 
                SET uso_medicacao = '${uso_medicacao}', 
                comorbidade_familiar = '${comorbidade_familiar}', 
                patologia = '${patologia}' 
                WHERE id_aluno = ${id_aluno}`, (error, results) => {
                    if(error) throw error;
                             
                    return res.json({status:"success", success:"Sua anamnese foi cadastrada com sucesso!"});
                })        
        })              
    }

module.exports = ana;