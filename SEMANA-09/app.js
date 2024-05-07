
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON no corpo das requisições
app.use(express.json()); 

// Middleware para registrar o horário de cada solicitação recebida
app.use((req, res, next) => {
  const metodoHttp = req.method;
  const url = req.url;
  const horario = new Date().toISOString();
  console.log(`[${horario}] ${metodoHttp} ${url}`);
  next();
});

// Middleware para servir arquivos estáticos do diretório 'public'
app.use(express.static('public'));

// Rota GET para '/ola'
app.get('/ola', (req, res) => {
  res.send('Olá, mundo!');
});

// Rota GET para '/sobre'
app.get('/sobre', (req, res) => {
  res.send('Exercício da semana 09 do FloripaMaisTec, turma Futurodev:NATURE');
});

// Rota GET para '/contato'
app.get('/contato', (req, res) => {
  res.send('contato: leiliane_sa@estudante.sesisenai.org.br');
});

// Rota GET para '/produto/:id'
app.get('/produto/:id', (req, res) => {
  res.send(`id do produto selecionado é: ${req.params.id}`);
});

    
let users = [];

// Criação (Create)
app.post('/users', (req, res) => {
  const { nome, email } = req.body;
  const newUser = {
    id: users.length + 1,
    nome,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});



// Leitura (Read)
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send('Usuário não encontrado.');
  }
  res.json(user);
});

// Atualização (Update)
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send('Usuário não encontrado.');
  }
  user.nome = req.body.nome || user.nome;
  user.email = req.body.email || user.email;
  res.json(user);
});

// Exclusão (Delete)
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).send('Usuário não encontrado.');
  }
  users.splice(userIndex, 1);
  res.status(200).send('Usuário excluído com sucesso.');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


// // CRUD de usuários com array em memória
// let userArray = [];


// app.route("/users")
//     .get((req, res) => res.json(userArray)) // Obter todos os usuários
//     .post((req, res) => { // Criar um novo usuário
//         const { id, nome, idade } = req.body;
//         const newUser = { id, nome, idade };
//         userArray.push(newUser);
//         res.status(201).json({ message: "usuário criado com sucesso" });
//     });


// app.route("/users/:id")
//     .get((req, res) => { // Obter usuário pelo ID
//         const user = userArray.find(user => user.id === parseInt(req.params.id));
//         if (!user) return res.status(404).json({ error: "usuário não encontrado" });
//         res.json(user);
//     })
//     .put((req, res) => { // Atualizar usuário
//         const index = userArray.findIndex(user => user.id === parseInt(req.params.id));
//         if (index === -1) return res.status(404).json({ error: "usuário não encontrado" });
//         const { nome, idade } = req.body;
//         Object.assign(userArray[index], { nome, idade });
//         res.json({ message: "dados do usuário atualizados" });
//     })
//     .delete((req, res) => { // Remover usuário
//         const index = userArray.findIndex(user => user.id === parseInt(req.params.id));
//         if (index === -1) return res.status(404).json({ error: "usuário não encontrado" });
//         userArray.splice(index, 1);
//         res.json({ message: "usuário removido com sucesso" });
//     });
