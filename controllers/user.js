const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const viewuser = async (req, res) => {
  let id = req.params.id;
  db.query(`SELECT * FROM aluno WHERE id = ${id}`, (err, result) => {

    if (!err) {
     req.user = result[0];
     res.render('pages/user', { user:req.user });
     console.log(result[0]);
     
    } else {
      console.log(err);
    }
    console.log('Dados dos usuários cadastrados no banco: \n', result[0]);

  })
}

module.exports = viewuser;