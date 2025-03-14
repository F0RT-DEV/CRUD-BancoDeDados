import path from 'path';
import url from 'url';


// puxando a url do arquivo atual
const __filename = url.fileURLToPath(import.meta.url);

// puxando o diretório do arquivo atual
const __dirname = path.dirname(__filename);

console.log('Caminho absoluto do arquivo:', __dirname);

aw