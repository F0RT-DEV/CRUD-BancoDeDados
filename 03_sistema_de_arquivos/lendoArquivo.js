import path from 'path';
import url from 'url';
import {promises as fs} from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const arquivo = path.join(__dirname, 'totalVendas.json');

try {
    //readFile lê o arquivo e exibir o conteudo em exadecimal
    const buffer = await fs.readFile(arquivo);
    //console.log(buffer)

    //para exibir o conteudo do arquivo em string
    console.log(String(buffer))

    //para exibir o conteudo do arquivo em JSON a diferença para o string é que o JSON.parse tem propriedades e podemos acessar essas propriedades e o string não
    console.log(JSON.parse(buffer).totalVendas);
} catch (error) {
    console.log(error.message);
}