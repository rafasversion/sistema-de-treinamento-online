const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const editreino = async (req, res) => {
    const { tipo_treino, nivel_treino, nome_treino, descricao_treino, dias_treino, objetivo_treino, observacao_treino, duracao_treino, frequencia_treino, id_treino } = req.body



                db.query(`UPDATE treino
                SET tipo_treino = '${tipo_treino}', 
                nivel_treino = '${nivel_treino}', 
                nome_treino = '${nome_treino}',
                descricao_treino = '${descricao_treino}',
                dias_treino = '${dias_treino}',
                objetivo_treino = '${objetivo_treino}',
                observacao_treino = '${observacao_treino}',
                duracao_treino = '${duracao_treino}',
                frequencia_treino = '${frequencia_treino}'
                WHERE id_treino = ${id_treino}`, (error, results) => {
                    if(error) throw error;
                    console.log(id_treino)
                    console.log(results)
                    return res.json({status:"success", success:"Treino editado com sucesso!"});
                })        
               
    }

module.exports = editreino;