import path from 'path';
import url from 'url';
import {promises as fs} from 'fs';

// puxando a url do arquivo atual
const __filename = url.fileURLToPath(import.meta.url);
// puxando o diretório do arquivo atual
const __dirname = path.dirname(__filename);

await fs.mkdir(path.join(__dirname, 'lojas','201','funcionarios'));

// 
const pasta = path.join(__dirname, 'lojas','201','funcionarios');
try {
    await fs.mkdir(pasta);
    console.log('Pasta criada com sucesso!', pasta);
} catch (error) {
    console.log(error.message);
}