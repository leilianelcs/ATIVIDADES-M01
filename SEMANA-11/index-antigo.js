// [M1S11] Ex. 1 - Rota de cadastro de curso
const express = require ('express');
const app = express();
app.use(express.json());

let cursos = [];

// app.post('/cursos', (req, res) => {
//   const { nome, duracao } = req.body;
  

//   // Validação dos dados recebidos
//   if (!nome || !duracao || typeof nome !== 'string' || typeof duracao !== 'number') {
//     return res.status(400).json({ erro: 'Dados inválidos' });
//   }

//   // Criação do curso no banco de dados
// const novoCurso = { id: cursos.length + 1, nome, duracao };
// cursos.push(novoCurso);

//   // Retorno do curso recém-criado com status 201
//   res.status(201).json(novoCurso);
// });


// // [M1S11] Ex. 2 - Rota de listagem de cursos

// app.get('/cursos', (req, res) => {
//   const { nome, duracao } = req.query; // [M1S11] Ex. 3 - Pesquisa de cursos
//   let cursosFiltrados = cursos;

//   // Filtragem por nome do curso
//   if (nome) {
//     cursosFiltrados = cursosFiltrados.filter(curso => curso.nome.toLowerCase().includes(nome.toLowerCase()));
//   }

//   // Filtragem por duração do curso
//   if (duracao) {
//     cursosFiltrados = cursosFiltrados.filter(curso => curso.duracao === Number(duracao));
//   }

//   // Listagem de todos os cursos ou filtrados
//   res.json(cursosFiltrados);
// });


// [M1S11] Ex. 4 - Rota de atualização de cursos

// app.put('/cursos/:id', (req, res) => {
//   const { id } = req.params;
//   const { nome, duracao } = req.body;
//   // Validação dos dados recebidos
//   if (!nome || !duracao || typeof nome !== 'string' || typeof duracao !== 'number') {
//     return res.status(400).json({ erro: 'Dados inválidos' });
//   }
//   // Encontrar o curso pelo ID
//   const cursoIndex = cursos.findIndex(curso => curso.id === parseInt(id));
//   // Se o curso não for encontrado, retorne um erro
//   if (cursoIndex === -1) {
//     return res.status(404).json({ erro: 'Curso não encontrado' });
//   }
//   // Atualização do curso no banco de dados
//   const cursoAtualizado = { id: cursos[cursoIndex].id, nome, duracao };
//   cursos[cursoIndex] = cursoAtualizado;
//   // Retorno do curso recém-atualizado com status 200
//   res.status(200).json(cursoAtualizado);
// });

// [M1S11] Ex. 5 - Rota de deleção de curso
app.delete('/cursos/:id', (req, res) => {
  const { id } = req.params;
  // Encontrar o índice do curso pelo ID
  const cursoIndex = cursos.findIndex(curso => curso.id === parseInt(id));
  // Se o curso não for encontrado, retorne um erro 404
  if (cursoIndex === -1) {
    return res.status(404).json({ erro: 'Curso não encontrado' });
  }
  // Remoção do curso do "banco de dados"
  cursos.splice(cursoIndex, 1);
  // Retorno de status code 204, sem conteúdo
  res.status(204).end();
});


const PORT = 3040;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


 //Exemplo aula SEM11 1:27h
//routes.post('/usuarios, async (req, res) => {
//try {

//const email = req.body.email
// const nome = req.body.nome
// const data_nascimento = req.body.data_nascimento

// if(!nome) {
    //     return res.status(400).json({messagem: 'O nome é obrigatório'})
    // }

 // if(!data_nascimento) {
    //     return res.status(400).json({messagem: 'A data de nascimento é obrigatória'})
    // }

    
    // if(!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
    //     return res.status(400).json({ messagem: 'A data de nascimento não está no formato correto' }) 
    // }


//const usuario = await Usuario.create({
//email: email,
//nome: nome,
//data_nascimento: data_nascimento 
//})

//res.status(201).json(usuario)
//} catch (error) {
//console.log(error.message)
   //res.status(500).json({error: 'Não foi possível cadastrar usuário'})
//}
//})

 // ou

 //routes.post('/usuarios, async (req, res) => {
 // const usuario = await Usuario.create({req.body})
//res.json(usuario)
//})

//routes.get('/usuarios, async (req, res) => {
    //const usuarios = await Usuario.findAll() 
    //res.json(usuarios)
    //})

//cursos
    // if(!nome) {
    //     return res.status(400).json({messagem: "O nome é obrigatório" })
    // }

    // if(!(duracao_horas >= 40 && duracao_horas <= 200)) {
    //     return res.status(400).json({  messagem: "A duração do curso deve ser entre 40 e 200 horas"
    //     })
    // }
 

    // routes.delete('/cursos/:id', (req,res) => {
    //const id = req.params.id    
    //const Curso.destroy({
    //    where: {
    //      id: id //nome do que quer deletar
    //}
    //})
    // res.status(204).json({})
    // })
//fazer o delete do slide da aula 3 sem11



//body params = post e put  
//route params = /: delete e put/patch
//query params = ? get





    // routes.get('/cursos', async (req, res) => {
    //     let params = {}
        //     if(req.query.nome)  {
    //         params = {...params, nome: req.query.nome}
    //     }
    //     const cursos = await Curso.findAll({
    //         where: params
    //     })
    //     res.json(cursos)
    // })
