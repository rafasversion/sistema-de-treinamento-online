
const etapa1 = document.getElementById('etapa1') 
const etapa2 = document.getElementById('etapa2')
const etapa3 = document.getElementById('etapa3')


anamnese.addEventListener("submit", () => {
  const anamnese = {
    naturalidade: naturalidade.value,
    profissao: profissao.value,
    peso: peso.value,
    altura: altura.value,
    tipo_sanguineo: tipo_sanguineo.value,
    horas_sono: horas_sono.value,
    contato_emergencia: contato_emergencia.value,
    historico_exercicio_frequencia: historico_exercicio_frequencia.value,
    historico_exercicio_tempo: historico_exercicio_tempo.value,
    atual_exercicio: document.querySelector('input[name="exercicio"]:checked').value,
    antigo_exercicio: document.querySelector('input[name="antigo_exercicio"]:checked').value
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

          if(etapa1.style.display === 'none') {
            etapa2.style.display = 'block'
            error.style.display = "none"
          } else {
            etapa1.style.display = 'none'
            etapa2.style.display = 'block'
            error.style.display = "none"
          }
    }
  })
})


const listaPatologias = () => {
  const patologias = document.getElementsByName('patologia')
  const arrayPatologias = []
  for(var i=0; i<patologias.length; i++) {
      if(patologias[i].checked) {
          arrayPatologias.push(patologias[i].value)
      }
  }
  return arrayPatologias
}

const listaComorbidades = () => {
  const comorbidades = document.getElementsByName('comorbidade_familiar')
  const arraycomorbidade = []
  for(var i=0; i<comorbidades.length; i++) {
      if(comorbidades[i].checked) {
        arraycomorbidade.push(comorbidades[i].value)
      }
  }
  return arraycomorbidade
}

ana.addEventListener("submit", () => {
  console.log(String(listaComorbidades()))

  const ana = {
    uso_medicacao: uso_medicacao.value,
    comorbidade_familiar: String(listaComorbidades()),
    patologia: String(listaPatologias())
  }
  
  fetch("/api/ana", {
    method: "POST",
    body: JSON.stringify(ana),
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
      if(etapa2.style.display === 'none') {
        etapa3.style.display = 'block'
        error.style.display = "none"
      } else {
        etapa2.style.display = 'none'
        etapa3.style.display = 'block'
        error.style.display = "none"
      }
    }
  })
})


anam.addEventListener("submit", () => {
  const anam = {
    objetivo: document.querySelector('input[name="objetivo"]:checked').value,
    uso_suplemento_alimentar: uso_suplemento_alimentar.value,
    periodo_menstruacao: periodo_menstruacao.value,
    frequencia_cardiaca_repouso: frequencia_cardiaca_repouso.value,
    refeicoes: document.querySelector('input[name="refeicoes"]:checked').value,
  }
  
  fetch("/api/anam", {
    method: "POST",
    body: JSON.stringify(anam),
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

      if(etapa3.style.display === 'none') {
        successo.style.display = 'block'
        error.style.display = "none"

      } else {
        etapa3.style.display = 'none'
        successo.style.display = 'block'
        error.style.display = "none"
        

      }
    }
  })
})


