
form.addEventListener("submit", () => {

    const loginadm = {
      email_personal: email_personal.value,
      senha_personal: senha_personal.value
    }
  
    fetch("/api/loginadm", {
      method: "POST",
      body: JSON.stringify(loginadm),
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
  
          success_msg.style.display = "block"
          login_form.style.display = "none"
  
          setTimeout(function(){
            window.location.reload()
          }, 2000);
  
      }
  
      
  
    })
  
  })