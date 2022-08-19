const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const { email, password} = req.body
    if(!email || !password) return res.json({status:"error", error:"Por favor insira um e-mail e uma senha!"});
    else {
        db.query('SELECT * FROM aluno WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if(!result.length || !await bcrypt.compare(password, result[0].password)) return res.json({status:"error", error: "E-mail ou senha estão incorretas!"})
            else {
                const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
                    expiresIn:process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly:true
                }
                res.cookie("userRegistered", token, cookieOptions);
                return res.json({status: "success", success: "Você foi logado com sucesso!"});
            }
    })
  }
}

module.exports = login;