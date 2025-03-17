// esse arquivo vai fazer as tratativas Regra de Negocio do sistema do banco de dados para evitar erros de dados

import { criandoProduto } from "../models/ProdutoModel.js";

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
        console.log(error)
        res.status(500).json({mensagem: 'Erro ao criar produto'})
    }
}

//criando outras rotas
const readProduto = async (req, res) => {
    const produtos = await db.produtos.findAll();
}

const updateProduto = async (req, res) => {
    const id_produto = req.params.id;
    const nome = req.body.nome;
}

const deleteProudto = async (req, res) => {
    const id_produto = req.params.id;
}