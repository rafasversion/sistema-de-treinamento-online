const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const listposts = async (req, res) => {

  db.query("SELECT * FROM postagens", (err, result) => {
  


    

  db.query('select * from treino', async (eros, treino) => {
    
    
    
    if (!err) {
      if(!eros){
        let promiseQueue = [];
        treino.forEach(t => {
          promiseQueue.push(query(`select * from exercicios where id_treino = ${t.id_treino}`))
        });
        let results = await Promise.all(promiseQueue);
        treino = treino.map(t => {
          const exercicios = results.find(exs => exs[0]?.id_treino == t.id_treino)?.map(ex => ({...ex}))
          return {
            ...t,
            exercicios
          }
        })
        console.log(treino);
      }
        // console.log('result', result);
        res.render("pages/ferramentas", {result, treino})
      } else {
        console.log(err);  
      }

    })
})
  
}
 
const query = (sql)=>{
  return new Promise((resolve, reject)=>{
    db.query(sql, (err, result) => {
      if(err){
        return reject(err)
      }
      resolve(result);
    })
  })
}

module.exports = listposts;
