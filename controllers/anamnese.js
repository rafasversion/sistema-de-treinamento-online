const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const anamnese = async (req, res) => {
    const { naturalidade, profissao, peso, altura, tipo_sanguineo, horas_sono, contato_emergencia, historico_exercicio_frequencia, historico_exercicio_tempo, antigo_exercicio, atual_exercicio } = req.body
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
    const id_aluno = decoded.id_aluno

    db.query('SELECT id_aluno FROM anamnese WHERE id_aluno = ?', [id_aluno], async (err, result) => {
        if (err) throw err;
        if(result[0]) return res.json({status:"error", error:"Você já possui a anamnese"})
else {
                db.query('INSERT INTO anamnese SET ?', { naturalidade,profissao, peso, altura, tipo_sanguineo, horas_sono, contato_emergencia, historico_exercicio_frequencia, historico_exercicio_tempo, atual_exercicio, antigo_exercicio, id_aluno }, (error, results) => {
                    if(error) throw error;
                             
                    return res.json({status:"success", success:"Sua anamnese foi cadastrada com sucesso!"});
                })   
            }      
        })              
    }

module.exports = anamnese;

