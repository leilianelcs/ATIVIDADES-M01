create table Funcionarios (
	id serial primary key,
	nome varchar(200) not null,
	idade int not null,
	check(idade >= 14 ),
	cargo varchar(200) not null,
	salario dec(19, 2) not null,
	idDepartamento int not null,
	foreign key (idDepartamento) references Departamento(id)
);


create table Departamento (
	id serial primary key,
	nome varchar(200) not null,
	dataCriacao date not null
);


insert into Departamento (nome, dataCriacao) values ('Vendas', '2022-11-28');
insert into Departamento (nome, dataCriacao) values ('Compras', '2024-10-28');
insert into Departamento (nome, dataCriacao) values ('Administrativo', '2023-12-28');


insert into Funcionarios (nome, idade, cargo, salario, idDepartamento) values
('Leiliane Costa', 38, 'Relações Públicas', 5000, 1),
('Juliano Nascimento', 37, 'Assistente Administrativo', 3000, 3),
('Júlia de Sá', 18, 'Analista de Compras', 4000, 2);

select * from Funcionarios;
select * from Departamento order by id;

-- select Funcionarios.*, Departamento.nome, Departamento.dataCriacao
-- from Funcionarios
-- inner join Departamento on Funcionarios.idDepartamento = Departamento.id;

-- select 
-- f.nome as funcionarios,
-- f.idade,
-- f.cargo,
-- f.salario,
-- d.nome as Departamento,
-- d.dataCriacao
-- from Funcionarios as f inner join departamento as d 
-- on f.idDepartamento = d.id;

select * from Funcionarios as f inner join departamento as d
on f.idDepartamento = d.id;

update Departamento
set nome = 'Aquisições'
where nome = 'Vendas';

-- update Departamento
-- set nome = 'Diretoria'
-- where id = 6;

update Funcionarios
set idade = 39
where nome = 'Leiliane Costa' and idade = 38;

-- update Funcionarios set idade = 39 where id = 1;

delete from Funcionarios
where nome = 'Júlia de Sá' and idade = 18 and cargo = 'Analista de Compras' and salario = 4000 and idDepartamento = 2;

delete from Funcionarios where idDepartamento = (select id from Departamento where nome = 'Administrativo');

--delete from Funcionarios where idDepartamento in (select id from Departamento where id = 3);
--delete from Departamento where id in (select idDepartamento from Funcionarios); --exemplo aula, apaga todo o departamento

delete from Departamento
where nome = 'Administrativo' and dataCriacao = '2023-12-28';

drop table if exists Funcionarios;
drop table if exists Departamento;
