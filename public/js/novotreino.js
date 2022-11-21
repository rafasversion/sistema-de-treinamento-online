
var btn_exer1 = document.getElementById('btn_exer1');
var btn_exer2 = document.getElementById('btn_exer2');
var group2 = document.getElementById('group_2');

var btn_exer3 = document.getElementById('btn_exer3');
var group3 = document.getElementById('group_3');

var btn_exer4 = document.getElementById('btn_exer4');
var group4 = document.getElementById('group_4');

var btn_exer5 = document.getElementById('btn_exer5');
var group5 = document.getElementById('group_5');

var btn_exer6 = document.getElementById('btn_exer6');
var group6 = document.getElementById('group_6');

var btn_exer7 = document.getElementById('btn_exer7');
var group7 = document.getElementById('group_7');

var btn_exer8 = document.getElementById('btn_exer8');
var group8 = document.getElementById('group_8');

var btn_exer9 = document.getElementById('btn_exer9');
var group9 = document.getElementById('group_9');

var btn_exer10 = document.getElementById('btn_exer10');
var group10 = document.getElementById('group_10');

var btn_exer11 = document.getElementById('btn_exer11');
var group11 = document.getElementById('group_11');

var btn_exer12 = document.getElementById('btn_exer12');
var group12 = document.getElementById('group_12');

btn_exer1.addEventListener('click', () => {
  if(group2.style.display === 'none') {
  btn_exer2.style.display = 'block';
  btn_exer1.style.display = 'none';
  group2.style.display = 'flex';
  } else {
    btn_exer2.style.display = 'block';
    group2.style.display = 'flex';
    btn_exer1.style.display = 'none';
  }
})


btn_exer2.addEventListener('click', () => {
  if(group3.style.display === 'none') {
  btn_exer3.style.display = 'block';
  btn_exer2.style.display = 'none';
  group3.style.display = 'flex';
  } else {
    btn_exer3.style.display = 'block';
    group3.style.display = 'flex';
    btn_exer2.style.display = 'none';
  }
})

btn_exer3.addEventListener('click', () => {
  if(group4.style.display === 'none') {
  btn_exer4.style.display = 'block';
  btn_exer3.style.display = 'none';
  group4.style.display = 'flex';
  } else {
    btn_exer4.style.display = 'block';
    group4.style.display = 'flex';
    btn_exer3.style.display = 'none';
  }
})


btn_exer4.addEventListener('click', () => {
  if(group5.style.display === 'none') {
  btn_exer5.style.display = 'block';
  btn_exer4.style.display = 'none';
  group5.style.display = 'flex';
  } else {
    btn_exer5.style.display = 'block';
    group5.style.display = 'flex';
    btn_exer4.style.display = 'none';
  }
})

btn_exer5.addEventListener('click', () => {
  if(group6.style.display === 'none') {
  btn_exer6.style.display = 'block';
  btn_exer5.style.display = 'none';
  group6.style.display = 'flex';
  } else {
    btn_exer6.style.display = 'block';
    group6.style.display = 'flex';
    btn_exer5.style.display = 'none';
  }
})

btn_exer6.addEventListener('click', () => {
  if(group7.style.display === 'none') {
  btn_exer7.style.display = 'block';
  btn_exer6.style.display = 'none';
  group7.style.display = 'flex';
  } else {
    btn_exer7.style.display = 'block';
    group7.style.display = 'flex';
    btn_exer6.style.display = 'none';
  }
})

btn_exer7.addEventListener('click', () => {
  if(group8.style.display === 'none') {
  btn_exer8.style.display = 'block';
  btn_exer7.style.display = 'none';
  group8.style.display = 'flex';
  } else {
    btn_exer8.style.display = 'block';
    group8.style.display = 'flex';
    btn_exer7.style.display = 'none';
  }
})


btn_exer8.addEventListener('click', () => {
  if(group9.style.display === 'none') {
  btn_exer9.style.display = 'block';
  btn_exer8.style.display = 'none';
  group9.style.display = 'flex';
  } else {
    btn_exer9.style.display = 'block';
    group9.style.display = 'flex';
    btn_exer8.style.display = 'none';
  }
})

btn_exer9.addEventListener('click', () => {
  if(group10.style.display === 'none') {
  btn_exer10.style.display = 'block';
  btn_exer9.style.display = 'none';
  group10.style.display = 'flex';
  } else {
    btn_exer10.style.display = 'block';
    group10.style.display = 'flex';
    btn_exer9.style.display = 'none';
  }
})


btn_exer10.addEventListener('click', () => {
  if(group11.style.display === 'none') {
  btn_exer11.style.display = 'block';
  btn_exer10.style.display = 'none';
  group11.style.display = 'flex';
  } else {
    btn_exer11.style.display = 'block';
    group11.style.display = 'flex';
    btn_exer10.style.display = 'none';
  }
})

btn_exer11.addEventListener('click', () => {
  if(group12.style.display === 'none') {
  btn_exer11.style.display = 'none';
  group12.style.display = 'flex';
  } else {
  group12.style.display = 'flex';
  btn_exer11.style.display = 'none';
  }
})

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
      observacao_treino: observacao_treino.value,

      exercicio1_treino: exercicio1_treino.value,
      sessoes1_treino: sessoes1_treino.value,
      recursos1_treino: recursos1_treino.value,
      repeticoes1_treino: repeticoes1_treino.value,
      intervalo1_treino: intervalo1_treino.value,
      observacao1_treino: observacao1_treino.value,
      video1_treino: video1_treino.value,

      exercicio2_treino: exercicio2_treino.value,
      sessoes2_treino: sessoes2_treino.value,
      recursos2_treino: recursos2_treino.value,
      repeticoes2_treino: repeticoes2_treino.value,
      intervalo2_treino: intervalo2_treino.value,
      observacao2_treino: observacao2_treino.value,
      video2_treino: video2_treino.value,

      exercicio3_treino: exercicio3_treino.value,
      sessoes3_treino: sessoes3_treino.value,
      recursos3_treino: recursos3_treino.value,
      repeticoes3_treino: repeticoes3_treino.value,
      intervalo3_treino: intervalo3_treino.value,
      observacao3_treino: observacao3_treino.value,
      video3_treino: video3_treino.value,

      exercicio4_treino: exercicio4_treino.value,
      sessoes4_treino: sessoes4_treino.value,
      recursos4_treino: recursos4_treino.value,
      repeticoes4_treino: repeticoes4_treino.value,
      intervalo4_treino: intervalo4_treino.value,
      observacao4_treino: observacao4_treino.value,
      video4_treino: video4_treino.value,

      exercicio5_treino: exercicio5_treino.value,
      sessoes5_treino: sessoes5_treino.value,
      recursos5_treino: recursos5_treino.value,
      repeticoes5_treino: repeticoes5_treino.value,
      intervalo5_treino: intervalo5_treino.value,
      observacao5_treino: observacao5_treino.value,
      video5_treino: video5_treino.value,

      exercicio6_treino: exercicio6_treino.value,
      sessoes6_treino: sessoes6_treino.value,
      recursos6_treino: recursos6_treino.value,
      repeticoes6_treino: repeticoes6_treino.value,
      intervalo6_treino: intervalo6_treino.value,
      observacao6_treino: observacao6_treino.value,
      video6_treino: video6_treino.value,

      exercicio7_treino: exercicio7_treino.value,
      sessoes7_treino: sessoes7_treino.value,
      recursos7_treino: recursos7_treino.value,
      repeticoes7_treino: repeticoes7_treino.value,
      intervalo7_treino: intervalo7_treino.value,
      observacao7_treino: observacao7_treino.value,
      video7_treino: video7_treino.value,

      exercicio8_treino: exercicio8_treino.value,
      sessoes8_treino: sessoes8_treino.value,
      recursos8_treino: recursos8_treino.value,
      repeticoes8_treino: repeticoes8_treino.value,
      intervalo8_treino: intervalo8_treino.value,
      observacao8_treino: observacao8_treino.value,
      video8_treino: video8_treino.value,

      exercicio9_treino: exercicio9_treino.value,
      sessoes9_treino: sessoes9_treino.value,
      recursos9_treino: recursos9_treino.value,
      repeticoes9_treino: repeticoes9_treino.value,
      intervalo9_treino: intervalo9_treino.value,
      observacao9_treino: observacao9_treino.value,
      video9_treino: video9_treino.value,

      exercicio10_treino: exercicio10_treino.value,
      sessoes10_treino: sessoes10_treino.value,
      recursos10_treino: recursos10_treino.value,
      repeticoes10_treino: repeticoes10_treino.value,
      intervalo10_treino: intervalo10_treino.value,
      observacao10_treino: observacao10_treino.value,
      video10_treino: video10_treino.value,

      exercicio11_treino: exercicio11_treino.value,
      sessoes11_treino: sessoes11_treino.value,
      recursos11_treino: recursos11_treino.value,
      repeticoes11_treino: repeticoes11_treino.value,
      intervalo11_treino: intervalo11_treino.value,
      observacao11_treino: observacao11_treino.value,
      video11_treino: video11_treino.value,

      exercicio12_treino: exercicio12_treino.value,
      sessoes12_treino: sessoes12_treino.value,
      recursos12_treino: recursos12_treino.value,
      repeticoes12_treino: repeticoes12_treino.value,
      intervalo12_treino: intervalo12_treino.value,
      observacao12_treino: observacao12_treino.value,
      video12_treino: video12_treino.value

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
  