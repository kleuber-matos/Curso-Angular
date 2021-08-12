drop table if exists reuniao;

drop database if exists portal;

create database portal;

CREATE SEQUENCE reuniao_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 3
  CACHE 1;
  
create table reuniao (
	id INTEGER NOT NULL DEFAULT nextval('reuniao_id_seq'),
    descricao varchar(200),
    datainicio date,
    localReuniao varchar(150),    
    numeroReuniaoConjunta varchar(3)
);




