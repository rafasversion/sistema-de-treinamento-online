
form.addEventListener("submit", () => {
    const editperfil = {
      email_aluno: email_aluno.value,
      nome_aluno: nome_aluno.value,
      sobrenome_aluno: sobrenome_aluno.value,
      data_nasc_aluno: data_nasc_aluno.value,
      telefone_aluno: telefone_aluno.value,
      sexo_aluno: sexo_aluno.value,
      cpf_aluno: cpf_aluno.value
    }
  
    fetch("/api/editperfil", {
      method: "POST",
      body: JSON.stringify(editperfil),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(data => {
      if(data.status == "error") {
        success.style.display = "none"
        error.style.display = "block"
        error.innerText = data.error
    } else {
        success.style.display = "block"
        error.style.display = "none"
        success.innerText = data.success
    }
      
    })
  })
  
  