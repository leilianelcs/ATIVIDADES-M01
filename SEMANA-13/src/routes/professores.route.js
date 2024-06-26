const { Router } = require('express');
const { auth } = require('../middleware/auth');
const ProfessorController = require('../controllers/ProfessorController');

const professorRoutes = new Router();

professorRoutes.post('/', ProfessorController.cadastrar);
professorRoutes.get('/', auth, ProfessorController.listar);
professorRoutes.put('/:id', auth, ProfessorController.atualizar);
professorRoutes.delete('/:id', auth, ProfessorController.deletar);

module.exports = professorRoutes

    
