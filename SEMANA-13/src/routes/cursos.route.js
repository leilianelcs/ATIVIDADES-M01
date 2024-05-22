const express = require('express');
const router = express.Router();

const { Router, query } = require('express') // 
const Curso = require('../models/Curso')

const { auth } = require('../middleware/auth')

const cursoRoutes = new Router()

// [M1S11] Ex. 1 - Rota de cadastro de curso
cursoRoutes.post('/', auth, async (req, res) => {
    try {
        const { nome, duracao_horas } = req.body;

        if (!nome) {
            return res.status(400).json({ error: "O nome é obrigatório" });
        }

        if (!(duracao_horas >= 40 && duracao_horas <= 2000)) {
            return res.status(400).json({
                error: "A duração do curso deve ser entre 40 e 2000 horas"
            });
        }

        const curso = await Curso.create({ nome, duracao_horas });

        res.status(201).json(curso);
    } catch (error) {
        console.error('Erro ao cadastrar o curso:', error);
        res.status(500).json({ error: 'Não foi possível cadastrar o curso' });
    }
});

// [M1S11] Ex. 2 - Rota de listagem de cursos
// [M1S11] Ex. 3 - Pesquisa de cursos

cursoRoutes.get('/', auth, async (req, res) => {
    try {
        let params = {};

        // Verifica se o parâmetro 'nome' foi passado na query e adiciona ao objeto 'params'
        if (req.query.nome) {
            params.nome = req.query.nome;
        }

        // Verifica se o parâmetro 'duracao_horas' foi passado na query e adiciona ao objeto 'params'
        if (req.query.duracao_horas) {
            // Converte 'duracao_horas' para número antes de adicionar ao 'params'
            const duracao = parseInt(req.query.duracao_horas);
            if (!isNaN(duracao)) {
                params.duracao_horas = duracao;
            } else {
                return res.status(400).json({ error: 'A duração do curso deve ser um número válido.' });
            }
        }

        // Busca no banco de dados por cursos que correspondam aos parâmetros fornecidos
        const cursos = await Curso.findAll({
            where: params
        });

        // Verifica se algum curso foi encontrado
        if (cursos.length === 0) {
            return res.status(404).json({ message: 'Nenhum curso encontrado com os parâmetros fornecidos.' });
        }

        // Retorna os cursos encontrados
        res.json(cursos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Não foi possível listar todos os cursos' });
    }
});



// [M1S11] Ex. 4 - Rota de atualização de cursos

cursoRoutes.put('/:id', auth, async (req, res) => {
    const { id } = req.params;
    const { nome, duracao_horas } = req.body;
    
    if (!nome) {
        return res.status(400).json({ error: "O nome é obrigatório" });
    }

    if (!(duracao_horas >= 40 && duracao_horas <= 2000)) {
        return res.status(400).json({ error: "A duração do curso deve ser entre 40 e 2000 horas" });
    }

    try {
        // Atualização do curso no banco de dados
        const [updated] = await Curso.update({ nome, duracao_horas }, {
            where: { id: parseInt(id) }
        });

        // Se nenhum curso foi atualizado, retorne um erro
        if (updated === 0) {
            return res.status(404).json({ error: 'Curso não encontrado' });
        }

        // Busca o curso recém-atualizado para retornar
        const cursoAtualizado = await Curso.findByPk(id);

        // Retorno do curso recém-atualizado com status 200
        res.status(200).json(cursoAtualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Não foi possível atualizar o curso' });
    }
});


//[M1S11] Ex. 5 - Rota de deleção de curso
cursoRoutes.delete('/:id', auth, async (req, res) => {
    const { id } = req.params;

    try {
        // Primeiro, verifica se o curso existe
        const curso = await Curso.findByPk(id);
        if (!curso) {
            return res.status(404).json({ error: 'Curso não encontrado' });
        }

        // Se o curso existir, prossegue com a deleção
        await Curso.destroy({
            where: {
                id: id
            }
        });

        // Retorna um status code 204 sem conteúdo na resposta
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao tentar deletar o curso' });
    }
});


module.exports = cursoRoutes


//meu código 

// const express = require ('express');
// const app = express();
// app.use(express.json());

// let cursos = [];

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


// // [M1S11] Ex. 4 - Rota de atualização de cursos

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

// // [M1S11] Ex. 5 - Rota de deleção de curso
// app.delete('/cursos/:id', (req, res) => {
//   const { id } = req.params;
//   // Encontrar o índice do curso pelo ID
//   const cursoIndex = cursos.findIndex(curso => curso.id === parseInt(id));
//   // Se o curso não for encontrado, retorne um erro 404
//   if (cursoIndex === -1) {
//     return res.status(404).json({ erro: 'Curso não encontrado' });
//   }
//   // Remoção do curso do "banco de dados"
//   cursos.splice(cursoIndex, 1);
//   // Retorno de status code 204, sem conteúdo
//   res.status(204).end();
// });


// const PORT = 3040;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });




// cursoRoutes.put('/:id', auth, async (req, res) => {
//     const { id } = req.params

//     const curso = await Curso.findByPk(id)

//     if (!curso) {
//         return res.status(404).json({ message: 'Curso não encontrado' })
//     }

//     curso.update(req.body)

//     await curso.save()

//     res.json(curso)
// })
