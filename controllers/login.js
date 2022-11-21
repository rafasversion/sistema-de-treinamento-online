const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const { email_aluno, senha_aluno} = req.body
    if(!email_aluno || !senha_aluno) return res.json({status:"error", error:"Por favor insira um e-mail e uma senha!"});
    else {
        db.query('SELECT * FROM aluno WHERE email_aluno = ?', [email_aluno], async (err, result) => {
            if (err) throw err;
            if(!result.length || !await bcrypt.compare(senha_aluno, result[0].senha_aluno)) return res.json({status:"error", error: "E-mail ou senha estão incorretas!"})
            else {
                const token = jwt.sign({ id_aluno: result[0].id_aluno }, process.env.JWT_SECRET, {
                    expiresIn:process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly:true
                }
                console.log(`${email_aluno} logou no site!`)

                if (err) throw err;
          
                res.cookie("userRegistered", token, cookieOptions);
                return res.json({status: "success", success: "Você foi logado com sucesso!"});
                
            }
    })
  }
}

module.exports = login;