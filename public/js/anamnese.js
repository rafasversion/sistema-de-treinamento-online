
anamnese.addEventListener("submit", () => {
  const anamnese = {
    naturalidade: naturalidade.value,
    profissao: profissao.value,
    peso: peso.value,
    altura: altura.value,
    tipo_sanguineo: tipo_sanguineo.value,
    horas_sono: horas_sono.value,
    periodo_menstruacao: periodo_menstruacao.value,
    contato_emergencia: contato_emergencia.value,
    frequencia_cardiaca: frequencia_cardiaca.value,
    uso_suplemento_alimentar: uso_suplemento_alimentar.value,
    patologia: patologia.value,
    comorbidade: comorbidade.value,
    uso_medicacao: uso_medicacao.value,
    objetivo: objetivo.value,
    historico_exercicio_frequencia: historico_exercicio_frequencia.value,
    historico_exercicio_tempo: historico_exercicio_tempo.value
  }
  

  fetch("/api/anamnese", {
    method: "POST",
    body: JSON.stringify(anamnese),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
  .then(data => {
    if (data.status == "error") {
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