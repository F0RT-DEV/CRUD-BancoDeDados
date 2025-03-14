//express e uma biblioteca back-end que facilita a criacao de servidores web
import express from 'express';

//App inicia o express
const app = express();
const port = 3000; // Porta que o servidor irá rodar

//Criando um array de frutas
const frutas = ['banana', 'maçã', 'uva'];

//Inserção manual de um elemento no array
frutas.push('laranja');

//Rota raiz
app.get('/', (req, res) => {
    res.send('API Funcionando');
});

//Criando uma nova rota
// app.get('/saudacao', (req, res) => {
//     res.send('Hello Fort!');
// });

app.get('/frutas', (req, res) => {
    res.json(frutas);
});

//Criando uma rota para adicionar frutas
app.post('/frutas/:fruta', (req, res) => {
    const fruta = req.params.fruta;
    frutas.push(fruta);
    res.status(200).json({mensagem: 'Fruta adicionada com sucesso!'});
});

//Criando uma rota para deletar frutas
app.delete('/frutas/:fruta', (req, res) => {
    const fruta = req.params.fruta;
    const index = frutas.indexOf(fruta);

    if(index < 0){
        res.status(404).json({mensagem: 'Fruta não encontrada!'});
    }else{
        frutas.splice(index, 1);
        res.status(200).json({mensagem: 'Fruta removida com sucesso!'});
    }
});

//Inicializando servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});