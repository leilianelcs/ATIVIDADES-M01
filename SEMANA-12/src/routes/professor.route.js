const { Router } = require('express');
const Professor = require('../models/Professor');
const { auth } = require('../middleware/auth');

const professorRoutes = new Router();

let professores = [];



// Rota POST para criar um novo professor
professorRoutes.post('/', (req, res) => {
  const { email, password, nome, materia } = req.body;
  if (!nome || !materia || !email || !password) {
    return res.status(400).json({ error: 'Nome, matéria, email e senha são obrigatórios.' });
  }
  const novoProfessor = { id: professores.length + 1, email, password, nome, materia };
  professores.push(novoProfessor);
  res.status(201).json(novoProfessor);
});


// Rota GET para listar todos os professores
professorRoutes.get('/', auth, (req, res) => {
  res.json(professores);
});

// Rota PUT para atualizar um professor existente
professorRoutes.put('/:id', auth, (req, res) => {
  const { id } = req.params;
  const { email, password, nome, materia } = req.body;
  const professorIndex = professores.findIndex(prof => prof.id === parseInt(id));
  if (professorIndex === -1) {
    return res.status(404).json({ erro: 'Professor não encontrado.' });
  }
  const professorAtualizado = { id: parseInt(id), email, password, nome, materia };
  professores[professorIndex] = professorAtualizado;
  res.status(200).json(professorAtualizado);
});

// Rota DELETE para remover um professor
professorRoutes.delete('/:id', auth, (req, res) => {
  const { id } = req.params;
  const professorIndex = professores.findIndex(prof => prof.id === parseInt(id));
  if (professorIndex === -1) {
    return res.status(404).json({ erro: 'Professor não encontrado.' });
  }
  professores.splice(professorIndex, 1);
  res.status(204).end();
});

module.exports = professorRoutes;

    
