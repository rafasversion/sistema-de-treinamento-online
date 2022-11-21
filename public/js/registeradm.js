
form.addEventListener("submit", () => {
    const registeradm = {
      email_personal: email_personal.value,
      senha_personal: senha_personal.value,
      nome_personal: nome_personal.value,
      sobrenome_personal: sobrenome_personal.value
    }
  
    fetch("/api/registeradm", {
      method: "POST",
      body: JSON.stringify(registeradm),
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
  
  
  
  
  