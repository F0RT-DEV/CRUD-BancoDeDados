//Importando o banco de dados
import db from '../conexaoBanco.js';
//Importando o mysql
import mysql from 'mysql2/promise';

//const conexao = mysql.createPool(db) criando uma função que irá conectar com o banco de dados
const conexao = mysql.createPool(db);


//função para adicionar um produto
export const criandoProduto = async (nomeProduto) => {
    console.log('ProdutoModel :: criandoProduto')
    //const sql está inserindo um produto
    const sql = `INSERT INTO produtos (nome_produto) VALUES (?)`;
    const params = [nomeProduto];

    try {
        //console.log('teste');
        const resposta = await conexao.query(sql,params);
        //console.log('teste2');
        //console.log(resposta);
        return [200, {mensagem: 'Produto cadastrado com sucesso'}];
    } catch (error) {
        //console.log(error);
        return [500,{
            mensagem: 'Erro no Servidor',
            code:error.code,
            sql:error.sqlMessage
        }
    ]};
}

//criando uma função para mostrar os produtos da tabela produtos do banco de dados
const mostrarProdutos = async () => {
    console.log('ProdutoModel :: mostrarProdutos');
    //const sql está pegando todos os produtos da tabela produtos
    const sql = 'SELECT * FROM produtos';

    //desenvolvendo os erros
    try {
        const [resposta] = await conexao.query(sql);
        //console.log(resposta);
        if (resposta.affectedRows < 1) {
            return [404, {mensagem:"Produtos não encontrado"}];
        }else{
            return [200, {mensagem:'Produtos encontrado'}];
        }
    } catch (error) {
        //console.error(error);
        return [500,{
                mensagem: 'Erro no Servidor',
                code:error.code,
                sql:error.sqlMessage
            }
        ]};
}


//função para atualizar um produto
const atualizarProduto = async (id_produtos,nomeProduto) => {
    console.log('ProdutoModel :: atualizarProduto')
    const sql = `UPDATE produtos SET nome_produto = ? WHERE id_produtos = ?`
    const params = [nomeProduto,id_produtos];
   //desenvolvendo os erros
   try {
    const [resposta] = await conexao.query(sql);
    //console.log(resposta);
    if (resposta.affectedRows < 1) {
        return [404, {mensagem:"Produtos atualizado com sucesso"}];
    }else{
        return [200, {mensagem:'Produtos não atualizado'}];
    }
} catch (error) {
    //console.error(error);
    return [500,{
            mensagem: 'Erro no Servidor',
            code:error.code,
            sql:error.sqlMessage
        }
    ]};
}

//função para deletar um produto
const deletarProduto = async (id_produtos) => {
    console.log('ProdutoModel :: deletarProduto')
    const sql = `DELETE FROM produtos WHERE id_produtos = ?`
    const params = [id_produtos];
    try {
        const resposta = await conexao.query(sql,params);
        console.log(resposta);
        } catch (error) {
            return [500,{
                mensagem: 'Erro no Servidor',
                code:error.code,
                sql:error.sqlMessage
            }
        ]};
}

//deletarProduto(2)
//atualizarProduto(5,'limão')
//criandoProduto('uva passa');
//console.log( await mostrarProdutos());