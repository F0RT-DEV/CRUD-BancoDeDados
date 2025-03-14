import path from 'path';
import url from 'url';
import {promises as fs} from 'fs';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const arquivo = path.join(__dirname, 'boas vindas.txt');

try {
    //writeFile cria um arquivo, se ele já existir, ele é sobrescrito
    //await fs.writeFile(arquivo, 'Bem vindo ao curso de Node.js!');

    //appendFile cria um arquivo, se ele já existir, ele é mantido e o conteúdo é adicionado ao final
    await fs.appendFile(arquivo, 'Bem vindo ao curso de Node.js!\n');
    console.log('Arquivo criado com sucesso!', arquivo);
} catch (error) {
    console.log(error.message);
}