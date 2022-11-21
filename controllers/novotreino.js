const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const novotreino = async (req, res) => {
    const { tipo_treino, nivel_treino, data_fim_treino, nome_treino, descricao_treino, id_aluno } = req.body

    status_treino = 'Incompleto'
    db.query('INSERT INTO treino SET ?', { tipo_treino, nivel_treino, data_fim_treino, nome_treino, descricao_treino, id_aluno, status_treino }, (error, results) => {
        if (error) throw error;
        return res.json({ status: "success", success: "Seu treino foi cadastrado com sucesso!" });
    })

   
}




module.exports = novotreino;