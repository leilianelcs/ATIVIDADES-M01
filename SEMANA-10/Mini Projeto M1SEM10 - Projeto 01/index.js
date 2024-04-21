
//[M1S10] Mini Projeto nº 1 - Produtos

// Importamos o express para criar nosso servidor
const express = require('express');

// Criamos uma aplicação express
const app = express();

// Definimos a porta onde o servidor será exposto
const PORT = 3000;

// Usamos o middleware express.json() para entender requisições que contêm JSON
app.use(express.json());

// Middleware para logar informações sobre cada chamada recebida
app.use((req, res, next) =>{
    console.log(`Requisição recebida: ${req.method} - ${req.originalUrl}`); 
    next(); // Passa o controle para o próximo middleware ou rota
});
      

// Lista para armazenar produtos temporariamente
let produtos = [];

// Implementando as funcionalidades CRUD (POST, GET, PUT, DELETE)
// Rota POST para criar um novo produto
app.post('/produtos', (req, res) => {
    // Extraímos nome, preço e descrição do corpo da requisição
    const { nome, preco, descricao } = req.body;

    // Validamos se todos os campos necessários foram fornecidos
    if (!nome || !preco || !descricao) {
        // Se algum campo estiver faltando, retornamos um erro 400
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    // Criamos um novo produto com um ID único
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        descricao
    };

    // Adicionamos o novo produto à lista
    produtos.push(novoProduto);

    // Retornamos o produto criado com status 201 (Criado)
    res.status(201).json(novoProduto);
});


// Rota GET para listar todos os produtos
app.get('/produtos', (req, res) => {
    // Retornamos a lista de produtos com status 200 (OK)
    res.status(200).json(produtos);
});

// Rota PUT para atualizar um produto existente
app.put('/produtos/:id', (req, res) => {
    // Obtemos o ID do produto a partir dos parâmetros da rota
    const { id } = req.params;
    // Obtemos os dados atualizados do corpo da requisição
    const { nome, preco, descricao } = req.body;

    // Encontramos o índice do produto na lista
    const index = produtos.findIndex(p => p.id === parseInt(id));

    // Se o produto não for encontrado, retornamos um erro 404
    if (index === -1) {
        return res.status(404).json({ error: 'Produto não encontrado!' });
    }

    // Atualizamos o produto com os novos dados
    produtos[index] = { id: parseInt(id), nome, preco, descricao };

    // Retornamos o produto atualizado com status 200 (OK)
    res.status(200).json(produtos[index]);
});


// Rota DELETE para excluir um produto existente
app.delete('/produtos/:id', (req, res) => {
    // Obtemos o ID do produto a partir dos parâmetros da rota
    const { id } = req.params;

    // Encontramos o índice do produto na lista
    const index = produtos.findIndex(p => p.id === parseInt(id));

    // Se o produto não for encontrado, retornamos um erro 404
    if (index === -1) {
        return res.status(404).json({ error: 'Produto não foi encontrado!' });
    }

    // Removemos o produto da lista
    produtos = produtos.filter(p => p.id !== parseInt(id));

    // Retornamos uma mensagem de sucesso com status 200 (OK)
    res.status(200).json({ message: `Item id ${id} removido com sucesso!` });
});

// Iniciamos o servidor na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});