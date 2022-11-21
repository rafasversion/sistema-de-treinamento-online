const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const loginadm = async (req, res) => {
    const { email_personal, senha_personal} = req.body
    if(!email_personal || !senha_personal) return res.json({status:"error", error:"Por favor insira um e-mail e uma senha!"});
    else {
        db.query('SELECT * FROM personal_trainer WHERE email_personal = ?', [email_personal], async (err, result) => {
            if (err) throw err;
            if(!result.length || !await bcrypt.compare(senha_personal, result[0].senha_personal)) return res.json({status:"error", error: "E-mail ou senha estão incorretas!"})
            else {
                const token = jwt.sign({ id_personal: result[0].id_personal }, process.env.JWT_SECRET_ADM, {
                    expiresIn:process.env.JWT_EXPIRES_ADM
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES_ADM * 24 * 60 * 60 * 1000),
                    httpOnly:true
                }
                console.log(`${email_personal} logou no site!`)

                if (err) throw err;
          
                res.cookie("admRegistered", token, cookieOptions);
                return res.json({status: "success", success: "Você foi logado com sucesso!"});
                
            }
    })
  }
}

module.exports = loginadm;