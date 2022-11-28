
create database sto;

use sto;

create table aluno(
  id_aluno int(11) not null primary key auto_increment,
  email_aluno varchar(100) not null,
  senha_aluno text not null,
  nome_aluno varchar(30) not null,
  sobrenome_aluno varchar(60) not null,
  sexo_aluno varchar(30) not null,
  cpf_aluno varchar(14) not null,
  telefone varchar(14) not null,
  data_nasc_aluno date
);


create table anamnese (
  id_anamnese int(11) not null primary key auto_increment,
  profissao varchar(100),
  tipo_sanguineo varchar(3),
  naturalidade varchar(50),
  patologia varchar(50),
  altura varchar(4),
  peso varchar(5),
  horas_sono varchar(50),
  periodo_menstruacao varchar(50),
  uso_suplemento_alimentar varchar (100),
  contato_emergencia varchar(14),
  frequencia_cardiaca_repouso varchar(4),
  comorbidade_familiar varchar(400),
  atual_exercicio varchar(10),
  antigo_exercicio varchar(10),
  uso_medicacao varchar(200),
  objetivo varchar(250),
  refeicoes varchar(10),
  historico_exercicio_tempo varchar(5),
  historico_exercicio_frequencia varchar(20),
  id_aluno int,
  constraint fk_id_aluno
  foreign key (id_aluno) 
  references aluno(id_aluno)
  );

create table treino (
  id_treino int(11) not null primary key auto_increment,
  tipo_treino varchar(50),
  nome_treino varchar(50),
  descricao_treino varchar(500),
  objetivo_treino varchar(100),
  duracao_treino varchar(10),
  status_treino varchar(10),
  nivel_treino varchar(20),
  observacao_treino varchar(100),
  data_treino date,
  id_aluno int,
  constraint fk_id_aluno_treino
  foreign key (id_aluno) 
  references aluno(id_aluno)
 );
 
 create table exercicios (
   id_exercicio int(11) not null primary key auto_increment,
   nome_exercicio varchar(50),
   recursos_exercicio varchar(300),
   series_exercicio varchar(5),
   repeticoes_exercicio varchar(5),
   intervalo_exercicio varchar(5),
   observacao_exercicio varchar(50),
   video_exercicio varchar(100),
   id_treino int,
   constraint fk_id_treino
   foreign key (id_treino) 
   references treino(id_treino)
   );

create table postagens (
  id_post int(11) not null primary key auto_increment,
  tipo_post varchar(10) not null,
  titulo_post varchar(50) not null,
  descricao_post varchar(1000),
  link_post varchar(500)
 );
  
 create table personal trainer (
   id_personal int(11) not null primary key auto_increment,
   email_personal varchar(100) not null,
   senha_personal text not null,
   nome_personal varchar(30) not null,
   sobrenome_personal varchar(30) not null,
   telefone_personal varchar(14) not null,
   instagram_personal vaerchar(20) not null
 );