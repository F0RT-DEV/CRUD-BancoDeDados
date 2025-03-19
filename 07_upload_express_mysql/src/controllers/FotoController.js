import path from 'path';
import url from 'url';
import { criarFoto } from "../models/FotosModels.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createFoto = async(req,res) => {
    console.log('FotoController :: createFoto')
    //const caminho = req.body.caminho;
    //const alternativo = req.body.alternativo;
    //const [caminho,alternativo] = req.body;
    const {alternativo} = req.body;
    const {foto} = req.files;

    if(!alternativo || !foto){
        return res.status(400).json({message: 'Preencha todos os campos'});
    }

    //let caminho = foto.name;
    const nomeFoto = foto.name;
    const extensao = path.extname(nomeFoto).toLocaleLowerCase();
    const caminho = `${Date.now()}${extensao}`;
    try {
        await foto.mv(path.join(__dirname, '..','..','public','img',caminho))
        const [status,resposta] = await criarFoto(caminho, alternativo)
        res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensagem:'erro ao criar foto'})
    }
}