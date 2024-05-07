const { Router } = require('express') // 
const Aluno = require('../models/Aluno')
const Curso = require('../models/Curso')

const routes = new Router()

// GET - Lista alguma coisa
// POST - Criar/adicionar algo
// PUT - Atualizar algo
// DELETE - Deleta algo
// PATCH - depois

// criar uma rota
// tipo
// path
// implementacao

routes.get('/bem_vindo', (req, res) => {
    res.json({ name: 'Bem vindo' })
})

routes.post('/alunos', async (req, res) => {
    try {
        const nome = req.body.nome
        const data_nascimento = req.body.data_nascimento
        const celular = req.body.celular
    
        if(!nome) {
            return res.status(400).json({messagem: 'O nome é obrigatório'})
        }

        // momentJs
        // date-fns

        if(!data_nascimento) {
            return res.status(400).json({messagem: 'A data de nascimento é obrigatória'})
        }

        const aluno = await Aluno.create({
            nome: nome,
            data_nascimento: data_nascimento,
            celular: celular
        })

        res.status(201).json(aluno)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível cadastrar o aluno' })
    }
})

routes.get('/alunos', async (req, res) => {
    const alunos = await Aluno.findAll()
    res.json(alunos)
})

routes.post('/cursos', async (req, res) => {
    const nome = req.body.nome
    const duracao_horas = req.body.duracao_horas

    const curso = await Curso.create({
        nome: nome,
        duracao_horas: duracao_horas
    })

    res.status(201).json(curso)
})

routes.get('/cursos', async (req, res) => {
    const cursos = await Curso.findAll()
    res.json(cursos)
})

module.exports = routes

