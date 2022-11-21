
form.addEventListener("submit", () => {
  const register = {
    email_aluno: email_aluno.value,
    senha_aluno: senha_aluno.value,
    nome_aluno: nome_aluno.value,
    sobrenome_aluno: sobrenome_aluno.value,
    data_nasc_aluno: data_nasc_aluno.value,
    telefone_aluno: telefone_aluno.value,
    sexo_aluno: sexo_aluno.value,
    cpf_aluno: cpf_aluno.value
  }

  fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(register),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
  .then(data => {
    if(data.status == "error") {
        error.style.display = "block"
        error.innerText = data.error
        success.style.display = "none"
    } else {
        success.style.display = "block"
        error.style.display = "none"
        registro.style.display = "none"

       
    }
  })
})

/*function ValidaCPF(){
  var cpf_aluno = document.forms.form.cpf_aluno.value;
  var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}))$/;
  if(cpfValido.test(cpf_aluno) == false) {
    cpf_aluno = cpf_aluno.replace(/\D/g, "");

    if(cpf_aluno.length==11){
      cpf_aluno = cpf_aluno.replace(/(\d{3})(\d)/, "$1.$2");
      
    }
  }
}*/


