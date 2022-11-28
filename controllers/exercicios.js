const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const adcexercicios = async (req, res) => {

function youtube_parser(url){  
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

db.query(`SELECT MAX(id_treino) FROM treino`, (erra, resulta) => {

    const { nome_exercicio, video_exercicio, recursos_exercicio, series_exercicio, observacao_exercicio, repeticoes_exercicio, intervalo_exercicio } = req.body
    const videoId = youtube_parser(video_exercicio)
    id_treino = Object.values(resulta[0])[0]
    console.log(id_treino)
 if (!erra) {
    
    db.query('INSERT INTO exercicios SET ?', { nome_exercicio, video_exercicio: videoId, recursos_exercicio, series_exercicio, observacao_exercicio, repeticoes_exercicio, intervalo_exercicio, id_treino }, (erro, results) => {
      if (erro) return console.log(erro);
      return res.json({ status: "success", success: "Seu treino foi cadastrado com sucesso!" });
      })
      } else {
        console.log(erra);  
      }
  

})


}

module.exports = adcexercicios;