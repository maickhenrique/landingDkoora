const express = require('express');
const fs = require('fs').promises; // Importando o módulo fs promisificado
const path = require('path');

const app = express();
const PORT = 3000;

// Rota para obter todos os produtos
app.get('/api/produtos', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'produtos.json'), 'utf8');
    const produtos = JSON.parse(data);
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao ler arquivo de produtos:', error);
    res.status(500).json({ message: 'Erro ao ler arquivo de produtos' });
  }
});

// Rota para obter um produto por ID
app.get('/api/produtos/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await fs.readFile(path.join(__dirname, 'produtos.json'), 'utf8');
    const produtos = JSON.parse(data);
    const produto = produtos.find(produto => produto.id === id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao ler arquivo de produtos:', error);
    res.status(500).json({ message: 'Erro ao ler arquivo de produtos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
