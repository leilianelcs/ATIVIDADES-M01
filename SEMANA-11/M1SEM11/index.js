// [M1S11] Ex. 1 - Rota de cadastro de curso
const express = require ('express');
const app = express();
app.use(express.json());

let cursos = [];

app.post('/cursos', (req, res) => {
  const { nome, duracao } = req.body;
  

  // Validação dos dados recebidos
  if (!nome || !duracao || typeof nome !== 'string' || typeof duracao !== 'number') {
    return res.status(400).json({ erro: 'Dados inválidos' });
  }

  // Criação do curso no banco de dados
const novoCurso = { id: cursos.length + 1, nome, duracao };
cursos.push(novoCurso);

  // Retorno do curso recém-criado com status 201
  res.status(201).json(novoCurso);
});


// [M1S11] Ex. 2 - Rota de listagem de cursos

app.get('/cursos', (req, res) => {
  const { nome, duracao } = req.query; // [M1S11] Ex. 3 - Pesquisa de cursos
  let cursosFiltrados = cursos;

  // Filtragem por nome do curso
  if (nome) {
    cursosFiltrados = cursosFiltrados.filter(curso => curso.nome.toLowerCase().includes(nome.toLowerCase()));
  }

  // Filtragem por duração do curso
  if (duracao) {
    cursosFiltrados = cursosFiltrados.filter(curso => curso.duracao === Number(duracao));
  }

  // Listagem de todos os cursos ou filtrados
  res.json(cursosFiltrados);
});


// [M1S11] Ex. 4 - Rota de atualização de cursos

app.put('/cursos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, duracao } = req.body;
  // Validação dos dados recebidos
  if (!nome || !duracao || typeof nome !== 'string' || typeof duracao !== 'number') {
    return res.status(400).json({ erro: 'Dados inválidos' });
  }
  // Encontrar o curso pelo ID
  const cursoIndex = cursos.findIndex(curso => curso.id === parseInt(id));
  // Se o curso não for encontrado, retorne um erro
  if (cursoIndex === -1) {
    return res.status(404).json({ erro: 'Curso não encontrado' });
  }
  // Atualização do curso no banco de dados
  const cursoAtualizado = { id: cursos[cursoIndex].id, nome, duracao };
  cursos[cursoIndex] = cursoAtualizado;
  // Retorno do curso recém-atualizado com status 200
  res.status(200).json(cursoAtualizado);
});

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


 