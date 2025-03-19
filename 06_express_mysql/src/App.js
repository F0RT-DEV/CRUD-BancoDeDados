import express from 'express';
import { createProduto, deleteProudto, readProduto, updateProduto } from './controllers/ProdutoController.js';


const app = express(); // Inicializa o express
const port = 3000;
app.use(express.json())//permitindo que o express entenda json

app.get('/', (req, res) => {
    //res.send() é uma função que envia uma resposta para o usuario
    res.send('API Funcionando');
});

//CRUD produtos
app.post('/produtos', createProduto)
app.get('/produtos', readProduto)
app.put('/produtos/:id_produto', updateProduto)
app.put('/produtos/:id_produto', deleteProudto)


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
// O código acima é um exemplo de um servidor express simples que envia uma mensagem de "API Funcionando" quando acessado na rota raiz.