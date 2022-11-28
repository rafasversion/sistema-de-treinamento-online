const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const novotreino = async (req, res) => {

    const { tipo_treino, nivel_treino, nome_treino, descricao_treino, dias_treino, objetivo_treino, observacao_treino, duracao_treino, frequencia_treino, id_aluno } = req.body

    
    status_treino = 'Incompleto'

    const timeElapse = Date.now();
    const data_treino = new Date(timeElapse)
    
    db.query('INSERT INTO treino SET ?', { tipo_treino, nivel_treino, nome_treino, descricao_treino, dias_treino, objetivo_treino, observacao_treino, duracao_treino, frequencia_treino, id_aluno, status_treino, data_treino }, (error, resultos) => {
        if (error) return console.log(error);
        return res.json({status:"success", success:"Você fez registro!"});

    })
   
}




module.exports = novotreino;