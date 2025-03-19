import db from '../conexao.js'
import mysql from 'mysql2/promise'

//criando um pool com database inet
const conexao = mysql.createPool(db);

//criando foto
export const criarFoto = async (caminho, alternativo) => {
    console.log('FotoModel :: CriandoFoto')
    const sql = `INSERT INTO fotos (caminho,alternativo) VALUES (?,?)`
    const params = [caminho,alternativo]


try {
    const resposta = await conexao.execute(sql, params)
    return [201,{mensagem:'Foto criada com sucesso'}]
} catch (error) {
    return[
        500, 
        {mensagem:'Erro Servidor',
            code:error.code, 
            sql:error.sqlMessage
        }]
}
}