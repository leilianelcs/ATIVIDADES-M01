const Curso = require("../models/Curso")

class CursoController {

    async listar(req, res) {
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
    }


    async cadastrar(req, res) {
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
            console.error('Erro ao cadastrar o curso no método cadastrar:', error.message);
            res.status(500).json({ error: 'Não foi possível cadastrar o curso' });
        }    
    }


    async atualizar(req, res) {
        const { id } = req.params;
        const { nome, duracao_horas } = req.body;
          
        // Validação do 'id'
        const idNumerico = parseInt(id);    
        if (isNaN(idNumerico)) {
        return res.status(400).json({ error: "O ID deve ser um número válido." });
        }

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
     }

     async deletar(req, res) {
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
     }
}
module.exports = new CursoController(); 