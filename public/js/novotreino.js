form.addEventListener("submit", () => {
    const novotreino = {
        id_aluno: id_aluno.value,
        tipo_treino: tipo_treino.value,
        nivel_treino: nivel_treino.value,
        data_fim_treino: data_fim_treino.value,
        nome_treino: nome_treino.value,
        descricao_treino: descricao_treino.value
    }
  
    fetch("/api/novotreino", {
      method: "POST",
      body: JSON.stringify(novotreino),
      headers: {
          "Content-Type":"application/json"
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
  