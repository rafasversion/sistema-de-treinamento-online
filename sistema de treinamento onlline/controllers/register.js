const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const register = async (req, res) => {
    const { nome, sobrenome, data_nasc, email, password: Npassword} = req.body
    if(!email || !Npassword) return res.json({status:"error", error:"Por favor insira um e-mail e uma senha!"});
    else {
        console.log(nome)
        console.log(email)
        db.query('SELECT email FROM aluno WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if(result[0]) return res.json({status:"error", error:"Este e-mail já está sendo usado!"})
            else {
                const password = await bcrypt.hash(Npassword, 8);

                db.query('INSERT INTO aluno SET ?', {nome, sobrenome, data_nasc, email, password}, (error, results) => {
                    if(error) throw error;
                    return res.json({status:"success", success:"Você foi registrado com sucesso!"})
                    
                })
            }
        })
    }
           
    

}
module.exports = register;