const { Router, query } = require('express') // 
const { auth } = require('../middleware/auth');
const CursoController = require('../controllers/CursoController');

const cursoRoutes = new Router()

cursoRoutes.post('/', auth, CursoController.cadastrar);
cursoRoutes.get('/', auth, CursoController.listar);
cursoRoutes.put('/:id', auth, CursoController.atualizar);
cursoRoutes.delete('/:id', auth, CursoController.deletar);


module.exports = cursoRoutes
