//Importando o módulo http
import http from 'http';

//Criando constante porta
const PORT = 3000;

//1. Processar a solicitações recebidas, (req) retornar uma resposta (res)
const exemploResposa =  (req, res) => {
    //Responder texto palno
    //res.writeHead(200, {'Content-Type':'text/plain'});
    //res.end('Primeiro APP');

    //Responder HTML
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.end('<h1>Primeiro APP</h1>');

    //Responder JSON
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.end(JSON.stringify({nome:"Senai"}));

    //Responder XML
    res.writeHead(200, {'Content-Type':'application/xml'});
    res.end(`
        <note>
            <to>Senai Viória</to>
            <from>Findes</from>
            <heading>Lembrete</heading>
            <body>
                Treinamento Node
            </body>
        </note>    
    `);
}

//2. Criar um servidor
const server = http.createServer(exemploResposa);

//3. Iniciando o servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})