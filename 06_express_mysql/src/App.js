import express from 'express';

const app = express(); // Inicializa o express
const port = 3000;

app.get('/', (req, res) => {
    //res.send() é uma função que envia uma resposta para o usuario
    res.send('API Funcionando');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
// O código acima é um exemplo de um servidor express simples que envia uma mensagem de "API Funcionando" quando acessado na rota raiz.