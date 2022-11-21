const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const registeradm = async (req, res) => {
    const { nome_personal, sobrenome_personal, email_personal, senha_personal: Nsenha_personal} = req.body
    if(!email_personal || !Nsenha_personal) return res.json({status:"error", error:"Por favor insira um e-mail e uma senha!"});
    else {
        console.log(nome_personal)
        console.log(email_personal)
        db.query('SELECT email_personal FROM personal_trainer WHERE email_personal = ?', [email_personal], async (err, result) => {
            if (err) throw err;
            if(result[0]) return res.json({status:"error", error:"Este e-mail já está sendo usado!"})
            else {
                const senha_personal = await bcrypt.hash(Nsenha_personal, 8);

               
                db.query('INSERT INTO personal_trainer SET ?', { nome_personal, sobrenome_personal,email_personal, senha_personal }, (error, results) => {
                    if(error) throw error;
                    return res.json({status:"success", success:"registrado"});
                })

                
            }
        })
    }
           
    

}
module.exports = registeradm;