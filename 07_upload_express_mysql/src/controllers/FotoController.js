import path from 'path';
import url from 'url';
import { atualizarFoto, criarFoto, deletarFoto, mostrarFotos, mostrarUmaFoto } from "../models/FotosModels.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createFoto = async(req,res) => {
    console.log('FotoController :: createFoto')
    //const caminho = req.body.caminho;
    //const alternativo = req.body.alternativo;
    //const [caminho,alternativo] = req.body;
    const {alternativo} = req.body;
    // || faz com que se não receber um arquivos recebar um objeto vazio {}
    const {foto} = req.files || {};

    if(!alternativo || !foto){
        return res.status(400).json({message: 'Preencha todos os campos'});
    }

    const nomeFoto = foto.name;
    const extensao = path.extname(nomeFoto).toLocaleLowerCase();
    const caminho = `${Date.now()}${extensao}`;
    try {
        await foto.mv(path.join(__dirname, '..','..','public','img',caminho))
        const [status,resposta] = await criarFoto(caminho, alternativo)
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({mensagem:'erro ao criar foto'})
    }
}

export const readFoto = async(req,res) => {
    console.log('FotoController :: readFoto')
    try {
        const [status,resposta] = await mostrarFotos();
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({mensagem:'erro ao mostrar fotos'})
    }
}

export const updateFoto = async(req,res) => {
    console.log('FotoController :: updateFoto')
    const {id_foto} = req.params;
    const {alternativo} = req.body;
    try {
        const [status,resposta] = await atualizarFoto(alternativo, id_foto)
        return res.status(status).json(resposta)
    } catch (error) {
        return res.status(500).json({mensagem:'erro ao atualizar fotos'})
    }
}

export const deleteFoto = async(req,res) => {
    console.log('FotoController :: deleteFoto')
    const {id_foto} = req.params;
    if(!id_foto){
        return res.status(400).json({message: 'o ID é obrigatorio!'});
    }
    try {
        const [status,resposta] = await deletarFoto(id_foto)
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({mensagem:'erro ao deletar fotos'})
    }
}

export const shwoOneFoto = async (req,res) => {
    console.log('FotoController :: shwoOneFoto')
    const {id_foto} = req.params;

    try {
        const [status,resposta] = await mostrarUmaFoto(id_foto)
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({mensagem:'erro ao mostrar uma fotos'})
    }
}
