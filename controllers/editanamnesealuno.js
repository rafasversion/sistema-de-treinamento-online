const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const editanamnesealuno = async (req, res) => {
    const { id_aluno, naturalidade, profissao, peso, altura, tipo_sanguineo, horas_sono, contato_emergencia, historico_exercicio_frequencia, historico_exercicio_tempo, antigo_exercicio, atual_exercicio, frequencia_cardiaca_repouso, uso_suplemento_alimentar, periodo_menstruacao, objetivo, refeicoes, comorbidade_familiar, uso_medicacao, patologia } = req.body

   

                db.query(`UPDATE anamnese
                SET naturalidade = '${naturalidade}', 
                profissao = '${profissao}', 
                peso = '${peso}',
                altura = '${altura}',
                tipo_sanguineo = '${tipo_sanguineo}',
                horas_sono = '${horas_sono}',
                contato_emergencia = '${contato_emergencia}',
                historico_exercicio_frequencia = '${historico_exercicio_frequencia}',
                historico_exercicio_tempo = '${historico_exercicio_tempo}',
                antigo_exercicio = '${antigo_exercicio}',
                atual_exercicio = '${atual_exercicio}',
                frequencia_cardiaca_repouso = '${frequencia_cardiaca_repouso}',
                uso_suplemento_alimentar = '${uso_suplemento_alimentar}',
                periodo_menstruacao = '${periodo_menstruacao}',
                objetivo = '${objetivo}',
                refeicoes = '${refeicoes}',
                comorbidade_familiar = '${comorbidade_familiar}',
                uso_medicacao = '${uso_medicacao}',
                patologia = '${patologia}'
                WHERE id_aluno = ${id_aluno}`, (error, results) => {
                    if(error) throw error;
                    console.log('id', id_aluno)
                    console.log('r', results)
                    return res.json({status:"success", success:"Anamnese do aluno editada com sucesso!"});
                })        
               
    }

module.exports = editanamnesealuno;