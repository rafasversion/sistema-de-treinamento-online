


form.addEventListener("submit", () => {
 
    const novotreino = {
      id_aluno: id_aluno.value,
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
  
    fetch("/api/novotreino", {
      method: "POST",
      body: JSON.stringify(novotreino),
      headers: {
          "Content-Type":"application/json"
      }
    }).then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.status == "success") {

          window.location.href = `/dashboard/aluno/novotreino/exercicios/${id_aluno.value}`
      } else {
        error.style.display = "block"
        error.innerText = data.error
      }
    })
  })
  