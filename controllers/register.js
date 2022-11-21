const db = require("../routes/config_db");
const bcrypt = require("bcryptjs")

const register = async (req, res) => {
    const { nome_aluno, sobrenome_aluno, data_nasc_aluno, cpf_aluno, telefone_aluno, sexo_aluno, email_aluno, senha_aluno: Nsenha_aluno} = req.body
    if(!email_aluno || !Nsenha_aluno) return res.json({status:"error", error:"Por favor insira um e-mail e uma senha!"});
    else {
        console.log(nome_aluno)
        console.log(email_aluno)
        db.query('SELECT email_aluno FROM aluno WHERE email_aluno = ?', [email_aluno], async (err, result) => {
            if (err) throw err;
            if(result[0]) return res.json({status:"error", error:"Este e-mail já está sendo usado!"})
            else {
                const senha_aluno = await bcrypt.hash(Nsenha_aluno, 8);

               
                db.query('INSERT INTO aluno SET ?', { nome_aluno, sobrenome_aluno, data_nasc_aluno, cpf_aluno, telefone_aluno,sexo_aluno, email_aluno, senha_aluno }, (error, results) => {
                    if(error) throw error;
                    return res.json({status:"success", success:"registrado"});
                })

                
            }
        })
    }
           
    

}
module.exports = register;