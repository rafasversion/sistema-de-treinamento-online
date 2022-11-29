
form.addEventListener("submit", () => {
    const editexercicio = {

        id_exercicio: id_exercicio.value,
        nome_exercicio:  document.querySelector('input[name="nome_exercicio"]').value,
        series_exercicio:  document.querySelector('input[name="series_exercicio"]').value,
        recursos_exercicio:  document.querySelector('input[name="recursos_exercicio"]').value,
        repeticoes_exercicio:  document.querySelector('input[name="repeticoes_exercicio"]').value,
        intervalo_exercicio:  document.querySelector('input[name="intervalo_exercicio"]').value,
        observacao_exercicio:  document.querySelector('input[name="observacao_exercicio"]').value,
        video_exercicio:  document.querySelector('input[name="video_exercicio"]').value
    }
  
    fetch("/api/editexercicio", {
      method: "POST",
      body: JSON.stringify(editexercicio),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(data => {
      if(data.status == "error") {
          error.style.display = "block"
          error.innerText = data.error
      } else {
          success.style.display = "block"
          error.style.display = "none"
          registro.style.display = "none"
      }
    })
  })
  
  
  