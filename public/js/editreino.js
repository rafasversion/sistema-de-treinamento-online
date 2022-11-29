form.addEventListener("submit", () => {
 
    const editreino = {
      id_treino: id_treino.value,
      tipo_treino: tipo_treino.value,
      nivel_treino: nivel_treino.value,
      nome_treino: nome_treino.value,
      descricao_treino: descricao_treino.value,
      dias_treino: dias_treino.value,
      duracao_treino: duracao_treino.value,
      frequencia_treino: frequencia_treino.value,
      objetivo_treino: objetivo_treino.value,
      observacao_treino: observacao_treino.value
    }
  
    fetch("/api/editreino", {
      method: "POST",
      body: JSON.stringify(editreino),
      headers: {
          "Content-Type":"application/json"
      }
    }).then(res => res.json())
    .then(data => {
      // console.log(data)
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
  