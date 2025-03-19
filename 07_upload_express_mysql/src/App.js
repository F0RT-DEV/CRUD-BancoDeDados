import express from 'express';
import fileUpload from 'express-fileupload';
import path from 'path';
import url from 'url';
import { createFoto } from './controllers/FotoController.js';


const port = 3000;
const app = express();

//pagando o caminho do arquivo 
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//habilitando uso do JSON 
app.use(express.json())
app.use(fileUpload())
app.get('/',(req, res)=>{
    res.status(200).json({mensagem:"API Funcionando"})
})

app.post('/fotos', createFoto)

//criando uma rota para o arquivo
app.use('/public', express.static(path.join(__dirname,'..','public','img')))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
