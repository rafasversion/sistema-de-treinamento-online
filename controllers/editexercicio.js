const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const editexercicio = async (req, res) => {

    function youtube_parser(url){  
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }


    const { id_exercicio, nome_exercicio, video_exercicio, recursos_exercicio, series_exercicio, observacao_exercicio, repeticoes_exercicio, intervalo_exercicio } = req.body

   

    const videoId = youtube_parser(video_exercicio)

                db.query(`UPDATE exercicios
                SET nome_exercicio = '${nome_exercicio}', 
                video_exercicio = '${videoId}', 
                recursos_exercicio = '${recursos_exercicio}',
                series_exercicio = '${series_exercicio}',
                observacao_exercicio = '${observacao_exercicio}',
                repeticoes_exercicio = '${repeticoes_exercicio}',
                intervalo_exercicio = '${intervalo_exercicio}'
                WHERE id_exercicio = ${id_exercicio}`, (error, results) => {
                    if(error) throw error;
                    console.log(id_exercicio)
                    console.log(results)
                    return res.json({status:"success", success:"Treino o exercício com sucesso!"});
                })        
               
    }

module.exports = editexercicio;