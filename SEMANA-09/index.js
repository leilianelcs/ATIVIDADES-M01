const express = require('express');
const app = express();

app.use(express.json()); // Middleware para parsear JSON no corpo das requisições

// Middleware para logar informações das requisições
app.use((req, res, next) => {
    console.log(`Método HTTP: ${req.method}, URL: ${req.originalUrl}, Hora: ${new Date()}`);
    next();
});

// Rotas básicas
app.get("/", (req, res) => res.send("Olá Mundo!"));
app.get("/sobre", (req, res) => res.send("Exercício da semana 09 do FloripaMaisTec, turma Futurodev:NATURE"));
app.get("/contato", (req, res) => res.send("contato: leiliane_sa@estudante.sesisenai.org.br"));
app.get("/produto/:id", (req, res) => res.send(`id produto selecionado: ${req.params.id}`));

// CRUD de usuários com array em memória
let userArray = [];

app.route("/users")
    .get((req, res) => res.json(userArray)) // Obter todos os usuários
    .post((req, res) => { // Criar um novo usuário
        const { id, nome, idade } = req.body;
        const newUser = { id, nome, idade };
        userArray.push(newUser);
        res.status(201).json({ message: "usuário criado com sucesso" });
    });

app.route("/users/:id")
    .get((req, res) => { // Obter usuário pelo ID
        const user = userArray.find(user => user.id === parseInt(req.params.id));
        if (!user) return res.status(404).json({ error: "usuário não encontrado" });
        res.json(user);
    })
    .put((req, res) => { // Atualizar usuário
        const index = userArray.findIndex(user => user.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: "usuário não encontrado" });
        const { nome, idade } = req.body;
        Object.assign(userArray[index], { nome, idade });
        res.json({ message: "dados do usuário atualizados" });
    })
    .delete((req, res) => { // Remover usuário
        const index = userArray.findIndex(user => user.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: "usuário não encontrado" });
        userArray.splice(index, 1);
        res.json({ message: "usuário removido com sucesso" });
    });

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));