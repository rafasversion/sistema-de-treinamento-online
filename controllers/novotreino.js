const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const novotreino = async (req, res) => {
    const { tipo_treino, nivel_treino, nome_treino, descricao_treino, dias_treino, objetivo_treino, observacao_treino, duracao_treino, frequencia_treino, exercicio1_treino, video1_treino, recursos1_treino, sessoes1_treino, observacao1_treino, repeticoes1_treino, intervalo1_treino, exercicio2_treino, recursos2_treino, sessoes2_treino, video2_treino,  observacao2_treino, repeticoes2_treino, intervalo2_treino, exercicio3_treino, recursos3_treino, sessoes3_treino, video3_treino,  observacao3_treino, repeticoes3_treino, intervalo3_treino, exercicio4_treino, recursos4_treino, sessoes4_treino, video4_treino,  observacao4_treino, repeticoes4_treino, intervalo4_treino, exercicio5_treino, recursos5_treino, sessoes5_treino, video5_treino,  observacao5_treino, repeticoes5_treino, intervalo5_treino, exercicio6_treino, recursos6_treino, sessoes6_treino, video6_treino,  observacao6_treino, repeticoes6_treino, intervalo6_treino, exercicio7_treino, recursos7_treino, sessoes7_treino, video7_treino,  observacao7_treino, repeticoes7_treino, intervalo7_treino, exercicio8_treino, recursos8_treino, sessoes8_treino, video8_treino,  observacao8_treino, repeticoes8_treino, intervalo8_treino, exercicio9_treino, recursos9_treino, sessoes9_treino, video9_treino, exercicio10_treino,  observacao9_treino, repeticoes9_treino, intervalo9_treino, recursos10_treino, sessoes10_treino, video10_treino,  observacao10_treino, repeticoes10_treino, intervalo10_treino,  exercicio11_treino, recursos11_treino, sessoes11_treino, video11_treino,  observacao11_treino, repeticoes11_treino, intervalo11_treino, exercicio12_treino, recursos12_treino, sessoes12_treino, video12_treino,  observacao12_treino, repeticoes12_treino, intervalo12_treino, id_aluno } = req.body

    status_treino = 'Incompleto'

    const timeElapse = Date.now();
    const data_treino = new Date(timeElapse)
    
    db.query('INSERT INTO treino SET ?', { tipo_treino, nivel_treino, nome_treino, descricao_treino, dias_treino, objetivo_treino, observacao_treino, duracao_treino, frequencia_treino, exercicio1_treino, video1_treino, recursos1_treino, sessoes1_treino, observacao1_treino, repeticoes1_treino, intervalo1_treino, exercicio2_treino, recursos2_treino, sessoes2_treino, video2_treino,  observacao2_treino, repeticoes2_treino, intervalo2_treino, exercicio3_treino, recursos3_treino, sessoes3_treino, video3_treino,  observacao3_treino, repeticoes3_treino, intervalo3_treino, exercicio4_treino, recursos4_treino, sessoes4_treino, video4_treino,  observacao4_treino, repeticoes4_treino, intervalo4_treino, exercicio5_treino, recursos5_treino, sessoes5_treino, video5_treino,  observacao5_treino, repeticoes5_treino, intervalo5_treino, exercicio6_treino, recursos6_treino, sessoes6_treino, video6_treino,  observacao6_treino, repeticoes6_treino, intervalo6_treino, exercicio7_treino, recursos7_treino, sessoes7_treino, video7_treino,  observacao7_treino, repeticoes7_treino, intervalo7_treino, exercicio8_treino, recursos8_treino, sessoes8_treino, video8_treino,  observacao8_treino, repeticoes8_treino, intervalo8_treino, exercicio9_treino, recursos9_treino, sessoes9_treino, video9_treino, exercicio10_treino,  observacao9_treino, repeticoes9_treino, intervalo9_treino, recursos10_treino, sessoes10_treino, video10_treino,  observacao10_treino, repeticoes10_treino, intervalo10_treino,  exercicio11_treino, recursos11_treino, sessoes11_treino, video11_treino,  observacao11_treino, repeticoes11_treino, intervalo11_treino, exercicio12_treino, recursos12_treino, sessoes12_treino, video12_treino,  observacao12_treino, repeticoes12_treino, intervalo12_treino, id_aluno, status_treino, data_treino }, (error, results) => {
        if (error) return console.log(error);
        return res.json({ status: "success", success: "Seu treino foi cadastrado com sucesso!" });
    })
  
    db.query(`SELECT * FROM anamnese WHERE id_aluno = ${id_aluno}`, (err, resultes) => {
  
        if (!err) {
        req.anamnese = resultes[0];
        res.render("pages/novotreino", {user:req.user, anamnese:req.anamnese})
      
        } else {
          console.log(err);  
        }
      
      })
   
}




module.exports = novotreino;