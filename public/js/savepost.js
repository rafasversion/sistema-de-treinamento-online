
form.addEventListener("submit", () => {
    const savepost = {
        titulo_post: titulo_post.value(),
        descricao_post: descricao_post.value(),
        link_post: link_post.value()
    }
  
    fetch("/api/savepost", {
      method: "POST",
      body: JSON.stringify(savepost),
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
