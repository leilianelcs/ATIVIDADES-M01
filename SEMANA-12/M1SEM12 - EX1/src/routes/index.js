const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

let professores = [];
let usuarios = [];

// Rota para registrar um novo usuário
app.post('/registrar', async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ erro: 'E-mail e senha são obrigatórios.' });
  }

  // Verificar se o usuário já existe
  const usuarioExistente = usuarios.find(usuario => usuario.email === email);
  if (usuarioExistente) {
    return res.status(400).json({ erro: 'E-mail já cadastrado.' });
  }

  // Criptografar a senha antes de salvar
  const senhaHash = await bcrypt.hash(senha, 10);

  const novoUsuario = { id: usuarios.length + 1, email, senha: senhaHash };
  usuarios.push(novoUsuario);
  res.status(201).json({ id: novoUsuario.id, email });
});

// Rota para login do usuário
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ erro: 'E-mail e senha são obrigatórios.' });
  }

  // Verificar se o usuário existe
  const usuario = usuarios.find(usuario => usuario.email === email);
  if (!usuario) {
    return res.status(400).json({ erro: 'Usuário não encontrado.' });
  }

  // Comparar a senha criptografada
  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    return res.status(400).json({ erro: 'Senha inválida.' });
  }

  res.status(200).json({ mensagem: 'Login realizado com sucesso!' });
});


// Rota POST para criar um novo professor
app.post('/professores', (req, res) => {
  const { nome, materia } = req.body;
  if (!nome || !materia) {
    return res.status(400).json({ erro: 'Nome e matéria são obrigatórios.' });
  }
  const novoProfessor = { id: professores.length + 1, nome, materia };
  professores.push(novoProfessor);
  res.status(201).json(novoProfessor);
});

// Rota GET para listar todos os professores
app.get('/professores', (req, res) => {
  res.json(professores);
});

// Rota PUT para atualizar um professor existente
app.put('/professores/:id', (req, res) => {
  const { id } = req.params;
  const { nome, materia } = req.body;
  const professorIndex = professores.findIndex(prof => prof.id === parseInt(id));
  if (professorIndex === -1) {
    return res.status(404).json({ erro: 'Professor não encontrado.' });
  }
  const professorAtualizado = { id: parseInt(id), nome, materia };
  professores[professorIndex] = professorAtualizado;
  res.status(200).json(professorAtualizado);
});

// Rota DELETE para remover um professor
app.delete('/professores/:id', (req, res) => {
  const { id } = req.params;
  const professorIndex = professores.findIndex(prof => prof.id === parseInt(id));
  if (professorIndex === -1) {
    return res.status(404).json({ erro: 'Professor não encontrado.' });
  }
  professores.splice(professorIndex, 1);
  res.status(204).end();
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
