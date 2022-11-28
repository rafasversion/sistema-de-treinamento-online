const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const concluirtreino = async (req, res) => {
    let id_treino = req.params.id_treino;

    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
    const id_aluno = decoded.id_aluno
    const status_c = 'Completo';
    db.query('SELECT id_treino FROM treino WHERE id_treino = ?', [id_treino], async (err, result) => {
        if (err) throw err;
       
    db.query(`UPDATE treino SET status_treino = '${status_c}' WHERE id_treino = '${id_treino}'`, (error, results) => {
                    if(error) throw error;
                    res.redirect(`/aluno/treino`)
                })
        })              
    }

module.exports = concluirtreino;