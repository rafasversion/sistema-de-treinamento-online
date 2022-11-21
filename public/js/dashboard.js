var dado = {
    // 445 caracteres
    nome: `${user.nome.aluno}`
 }
 
 let nome = document.querySelector('.nome');
 let nome_txt = dado.nome;
 if(nome_txt.length > 30) nome_txt = nome_txt.substr(0,30)+"...";
 nome.innerHTML = `<p>${nome_txt}</p>`;