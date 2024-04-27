const express = require('express');
const app = express();
app.use(express.json());

// Simulação de um banco de dados em memória
let professores = [];

// Rota POST para criar um novo professor
app.post('/professores', (req, res) => {
  const { nome, materia } = req.body;
  if (!nome || !materia) {
    return res.status(400).json({ erro: 'Nome e matéria são obrigatórios.' });
  }
  const novoProfessor = { id: professores.length + 1, nome, materia };
  professores.push(novoProfessor);
  res.status(201).json(novoProfessor);
});

// Rota GET para listar todos os professores
app.get('/professores', (req, res) => {
  res.json(professores);
});

// Rota PUT para atualizar um professor existente
app.put('/professores/:id', (req, res) => {
  const { id } = req.params;
  const { nome, materia } = req.body;
  const professorIndex = professores.findIndex(prof => prof.id === parseInt(id));
  if (professorIndex === -1) {
    return res.status(404).json({ erro: 'Professor não encontrado.' });
  }
  const professorAtualizado = { id: parseInt(id), nome, materia };
  professores[professorIndex] = professorAtualizado;
  res.status(200).json(professorAtualizado);
});

// Rota DELETE para remover um professor
app.delete('/professores/:id', (req, res) => {
  const { id } = req.params;
  const professorIndex = professores.findIndex(prof => prof.id === parseInt(id));
  if (professorIndex === -1) {
    return res.status(404).json({ erro: 'Professor não encontrado.' });
  }
  professores.splice(professorIndex, 1);
  res.status(204).end();
});

const PORT = 3020;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
