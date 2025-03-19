// esse arquivo vai fazer as tratativas Regra de Negocio do sistema do banco de dados para evitar erros de dados

import { atualizarProduto, criandoProduto, deletarProduto, mostrarProdutos } from "../models/ProdutoModel.js";

//CRUD produtos
//createProduto faz o controle de negocio para criar um produto
export const createProduto = async (req, res) => {
    console.log('ProdutoController :: criandoProduto')
    const nome = req.body.nome;

    try {
        const [status, resposta] = await criandoProduto(nome);
        //console.log(resposta)
        res.status(status).json(resposta)
    } catch (error) {
        //console.log(error)
        res.status(500).json({mensagem: 'Erro ao criar produto'})
    }
}

//criando outras rotas
export const readProduto = async (req, res) => {
    console.log('ProdutoController :: ReadProduto')
    try {
        const [status, resposta] = await mostrarProdutos();
        res.status(status).json(resposta)
    } catch (error) {
        //console.log(error)
        res.status(500).json({mensagem: 'Erro ao mostrar produto'})
    }
}

export const updateProduto = async (req, res) => {
    console.log('ProdutoController :: updateProduto')
    const id_produto = req.params.id_produto;
    const nome = req.body.nome;

    try {
        const [status, resposta] = await atualizarProduto(id_produto, nome);
        res.status(status).json(resposta)
    } catch (error) {
        res.status(500).json({mensagem: 'Erro ao atualizar produto'})
    }
}

export const deleteProudto = async (req, res) => {
    console.log('ProdutoController :: deleteProudto')
    const id_produto = req.params.id_produto;

    try {
    const [status, resposta] = await deletarProduto(id_produto);
    res.status(status).json(resposta)
    } catch (error) {
        res.status(500).json({mensagem: 'Erro ao deletar produto'})
    }
}