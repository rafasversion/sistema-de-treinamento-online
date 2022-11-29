const jwt = require("jsonwebtoken");
const db = require("../routes/config_db");
const bcrypt = require("bcryptjs");

const editperfil = async (req, res) => {
    const { nome_aluno, sobrenome_aluno, data_nasc_aluno, cpf_aluno, telefone_aluno, sexo_aluno, email_aluno } = req.body

   
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);

    const id_aluno = decoded.id_aluno;

                db.query(`UPDATE aluno
                SET nome_aluno = '${nome_aluno}', 
                sobrenome_aluno = '${sobrenome_aluno}', 
                data_nasc_aluno = '${data_nasc_aluno}',
                cpf_aluno = '${cpf_aluno}',
                telefone_aluno = '${telefone_aluno}',
                sexo_aluno = '${sexo_aluno}',
                email_aluno = '${email_aluno}'
                WHERE id_aluno = ${id_aluno}`, (error, results) => {
                    if(error) throw error;
                    console.log(id_aluno)
                    console.log(results)
                    return res.json({status:"success", success:"Perfil editado com sucesso!"});
                })        
               
    }

module.exports = editperfil;