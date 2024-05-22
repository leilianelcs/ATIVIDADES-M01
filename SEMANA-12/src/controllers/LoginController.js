const Aluno = require("../models/Aluno");
const Professor = require("../models/Professor");
const { sign } = require('jsonwebtoken');

class LoginController {

    async login(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;

            if (!email || !password) {
                return res.status(400).json({ error: 'Email e senha são obrigatórios' });
            }

            // Busca por aluno
            const aluno = await Aluno.findOne({
                where: { email, password }
            });

            // Se não encontrar aluno, busca por professor
            if (!aluno) {
                const professor = await Professor.findOne({
                    where: { email, password }
                });

                if (!professor) {
                    return res.status(404).json({ error: 'Nenhum aluno ou professor corresponde aos dados fornecidos!' });
                }

                // Dados do professor encontrados
                const payload = { sub: professor.id, email: professor.email, nome: professor.nome };
                const token = sign(payload, process.env.SECRET_JWT);
                return res.status(200).json({ Token: token });
            }

            // Dados do aluno encontrados
            const payload = { sub: aluno.id, email: aluno.email, nome: aluno.nome };
            const token = sign(payload, process.env.SECRET_JWT);
            return res.status(200).json({ Token: token });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Algo deu errado!' });
        }
    }
}

module.exports = new LoginController();


// const Aluno = require("../models/Aluno")
// const { sign } = require('jsonwebtoken')

// class LoginController {

//     async login(req, res) {
//         try {
//             const email = req.body.email
//             const password = req.body.password

//             if (!email) {
//                 return res.status(400).json({ message: 'O email é obrigatório' })
//             }

//             if (!password) {
//                 return res.status(400).json({ message: 'O password é obrigatório' })
//             }

//             const aluno = await Aluno.findOne({
//                 where: { email: email, password: password }
//             })

//             if (!aluno) {
//                 return res.status(404).json({ error: 'Nenhum aluno corresponde a email e senha fornecidos!' })
//             }

//             const payload = { sub: aluno.id, email: aluno.email, nome: aluno.nome }

//             const token = sign(payload, process.env.SECRET_JWT)

//             res.status(200).json({ Token: token })

//         } catch (error) {
//             return res.status(500).json({ error: error, message: 'Algo deu errado!' })
//         }
//     }
// }

// module.exports = new LoginController() 