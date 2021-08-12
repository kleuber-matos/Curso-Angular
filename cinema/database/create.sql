drop table if exists movie;

drop database if exists cinema;

create database cinema;

create table movie (
  id serial primary key,
  title varchar(50) not null,
  summary varchar(1500) not null,
  duration decimal(3),
  rating decimal(2)
);