const { Router } = require('express') 
const { auth } = require('../middleware/auth')

const MatriculaController = require('../controllers/AlunoController')

const matriculaRoutes = new Router()

matriculaRoutes.post('/', MatriculaController.cadastrar)
matriculaRoutes.get('/', auth, MatriculaController.listar)
matriculaRoutes.get('/:id', auth, MatriculaController.listarUm)

module.exports = matriculaRoutes