/*********************************************************************
 * Objetivo: Realizar a interação do HEMOCENTRO com o banco de dados
 * DATA: 22/08/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 ********************************************************************/

//Import da biblioteca do prisma client(responsável por manipular dados no BD)
var { PrismaClient } = require('@prisma/client')

//Instancia da classe do PrismaClient
var prisma = new PrismaClient();

//Inserir novo hemocentro no registro do banco de dados
const insertHemocentro = async function(dadosHemocentro){

    //Script SQl para inserir os dados no BD
    let sql = `inser into tbl_hospital (nome,
                                        cnpj,
                                        email,
                                        phone,
                                        website,
                                        donationSite,
                                        otherDonationSite,
                                        photo,
                                        password)
                                        values
                                        ('${dadosHemocentro.nome}',
                                        '${dadosHemocentro.cnpj}',
                                        '${dadosHemocentro.email}',
                                        '${dadosHemocentro.phone}',
                                        '${dadosHemocentro.website}',
                                        '${dadosHemocentro.donationSite}',
                                        '${dadosHemocentro.otherDonationSite}',
                                        '${dadosHemocentro.photo}',
                                        '${dadosHemocentro.password}'
                                        )`;

    //Executa o script SQL no BD e recebemos o retorno se deu certo ou não
    let result = await prisma.$executeRawUnsafe(sql);

    if (result)
        return true;
    else
        return false;
}

//Atualizar dados do HEMOCENTRO no banco de dados
const updateHemocentro = function(dadosHemocentro){

}


module.exports = {
    insertHemocentro
}
