const { compare } = require("bcryptjs");
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
                where: { email: email }
            });

            if (aluno) {
                // Compara a senha fornecida com a senha criptografada do aluno
                const isMatch = await compare(password, aluno.password);
                if (!isMatch) {
                    return res.status(403).json({ error: 'Usuário não encontrado' });
                }

                // Dados do aluno encontrados e senha correta
                const payload = { sub: aluno.id, email: aluno.email, nome: aluno.nome };
                const token = sign(payload, process.env.SECRET_JWT);
                return res.status(200).json({ Token: token });
            } else {
                // Se não encontrar aluno, busca por professor
                const professor = await Professor.findOne({
                    where: { email: email }
                });

                if (!professor) {
                    return res.status(404).json({ error: 'Nenhum usuário corresponde aos dados fornecidos!' });
                }

                // Compara a senha fornecida com a senha criptografada do professor
                const isMatch = await compare(password, professor.password);
                if (!isMatch) {
                    return res.status(403).json({ error: 'Usuário não encontrado' });
                }

                // Dados do professor encontrados e senha correta
                const payload = { sub: professor.id, email: professor.email, nome: professor.nome };
                const token = sign(payload, process.env.SECRET_JWT);
                return res.status(200).json({ Token: token });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Algo deu errado!' });
        }
    }
}

module.exports = new LoginController();




// const { compare } = require("bcryptjs");
// const Aluno = require("../models/Aluno");
// const Professor = require("../models/Professor");
// const { sign } = require('jsonwebtoken');

// class LoginController {

//     async login(req, res) {
//         try {
//             const email = req.body.email;
//             const password = req.body.password;

//             if (!email || !password) {
//                 return res.status(400).json({ error: 'Email e senha são obrigatórios' });
//             }

           
//             const aluno = await Aluno.findOne({
//                 where: { email: email}
//             });


//             // Se não encontrar aluno, busca por professor
//             if (!aluno) {
//                 const professor = await Professor.findOne({
//                     where: { email, password }
//                 });

//                 if (!professor) {
//                     return res.status(404).json({ error: 'Nenhum aluno ou professor corresponde aos dados fornecidos!' });
//                 }


//                 const hashSenha = await compare(password, aluno.password)

//                 if(hashSenha === false) {
//                     return res.status(403).json({ error: 'Aluno não encontrado' })
//                 }
    

//                 // Dados do professor encontrados
//                 const payload = { sub: professor.id, email: professor.email, nome: professor.nome };
//                 const token = sign(payload, process.env.SECRET_JWT);
//                 return res.status(200).json({ Token: token });
//             }

//             // Dados do aluno encontrados
//             const payload = { sub: aluno.id, email: aluno.email, nome: aluno.nome };
//             const token = sign(payload, process.env.SECRET_JWT);
//             return res.status(200).json({ Token: token });

//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ error: 'Algo deu errado!' });
//         }
//     }
// }

// module.exports = new LoginController();

