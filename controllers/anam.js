const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const anam = async (req, res) => {
    const { frequencia_cardiaca_repouso, uso_suplemento_alimentar, periodo_menstruacao, objetivo, refeicoes } = req.body
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
    const id_aluno = decoded.id_aluno

    db.query('SELECT id_aluno FROM anamnese WHERE id_aluno = ?', [id_aluno], async (err, result) => {
        if (err) throw err;
       
                db.query(`UPDATE anamnese 
                SET frequencia_cardiaca_repouso = '${frequencia_cardiaca_repouso}', 
                uso_suplemento_alimentar = '${uso_suplemento_alimentar}', 
                periodo_menstruacao = '${periodo_menstruacao}',
                objetivo = '${objetivo}',
                refeicoes = '${refeicoes}'
                WHERE id_aluno = ${id_aluno}`, (error, results) => {
                    if(error) throw error;
                             
                    return res.json({status:"success", success:"Sua anamnese foi cadastrada com sucesso!"});
                })        
        })              
    }

module.exports = anam;