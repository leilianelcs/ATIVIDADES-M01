const { Router } = require('express');
const Professor = require('../models/Professor');
const { auth } = require('../middleware/auth');

const professorRoutes = new Router();

// Rota POST para criar um novo professor
professorRoutes.post('/', async (req, res) => {
  const { email, password, nome, materia } = req.body;
  if (!nome || !materia || !email || !password) {
    return res.status(400).json({ error: 'Nome, matéria, email e senha são obrigatórios.' });
  }
  try {
    const novoProfessor = await Professor.create({ email, password, nome, materia });
    res.status(201).json(novoProfessor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar o professor no banco de dados.' });
  }
});

// Rota GET para listar todos os professores
professorRoutes.get('/', auth, async (req, res) => {
  try {
    const professores = await Professor.findAll();
    res.status(200).json(professores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os professores no banco de dados.' });
  }
});
// Rota PUT para atualizar um professor existente
professorRoutes.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { email, password, nome, materia } = req.body;

  try {
    const professorAtualizado = await Professor.update({ email, password, nome, materia }, {
      where: { id }
    });

    if (professorAtualizado[0] === 0) {
      return res.status(404).json({ erro: 'Professor não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Professor atualizado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o professor no banco de dados.' });
  }
});

// Rota DELETE para remover um professor
professorRoutes.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const professorDeletado = await Professor.destroy({
      where: { id }
    });

    if (professorDeletado === 0) {
      return res.status(404).json({ erro: 'Professor não encontrado.' });
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao remover o professor no banco de dados.' });
  }
});

module.exports = professorRoutes

    
