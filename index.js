//index.js

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require ('process');
const database = require('./db');
const {
    createProduto,
    consultarProdutos,
    consultarCodProdutos,
    atualizarProduto,
    deletarProduto
} = require('./produto');
//const usuario = require('./usuario');

(async () => {
    try {
        await database.sync();
        console.log('conexão com o banco de dados estabelecidas com sucesso.');

        // criando a interface do readline
        const rl = readline.createInterface({input, output})

        let executando = true;
        while (executando) {
            const menu = '\nEscolha uma opção:\n' +
                         '1. Criar Produto\n' +
                         '2. Consultar produtos\n' +
                         '3. Consultar produto por ID\n' +
                         '4. Atualizar Produto\n' +
                         '5. Deletar produto\n' +
                         '6. sair\n' +
                         'opção: ';

                  
            //Usa o await para pausar e espera o usuario digitar algo no terminal
            const opcao = await rl.question(menu);

            switch (opcao.trim()){
                case '1': {
                    const nome = await rl.question('Digite o nome do produto: ');
                    const preco = parseFloat(await rl.question('Digite o preço do produto: '));
                    const descricao = await rl.question('Digite a descrição: ');
                    await createProduto(nome, preco, descricao);
                    break;
                }
                case '2':
                    await consultarProdutos();
                    break;
                case '3': {
                    const idConsultar = await rl.question('Digite o ID do produto: ');
                    await consultarCodProdutos(idConsultar);
                    break;
                }
                case '4': {
                    const idAtualizar = await rl.question('Digite o ID do produto a atualizar: ');
                    const novoNome = await rl.question('Novo nome: ');
                    const novoPreco = parseFloat(await rl.question('Novo preço: '));
                    const novaDescricao = await rl.question('nova descrição: ');
                    await atualizarProduto(idAtualizar, novoNome, novoPreco, novaDescricao);
                }
                case '5': {
                    const idDeletar = await rl.question('Digite o ID do produto que deseja deletar: ')
                    await deletarProduto(idDeletar);
                    break;
                }
                case '6': 
                    console.log('saiindo do programa...');
                    executando = false;
                    break;
                default:
                    console.log('opção invalida. Por favor, escolha uma opção valida.');
                
            }
        }

        rl.close(); //Fecha a interface do terminal ao sair 
        ProcessingInstruction.exit(0);

    }catch (erro) {
        console.error('Erro ao conectar ao banco de dados ou executar o meu :', error);
    }
})();






/*
(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'um mouse USB bonitao'
        })

        /*
        const produtos = await Produto.findAll();
        console.log(produtos);

        const produto = await Produto.findByPk(2);
        console.log(produto);
*/
/*
const produtos = await Produto.findByPk(1);
        //console.log(produtos);
        produto.nome = "mouse top";

        const resultadoSave = await produto.save();
        console.log(resultadoSave);
*/

/*
//assim
Produto.destroy({ where: { id: 1 }});

//ou assim 
const produto = await Produto.findByPk(1);
produto.destroy();


    } catch (error) { 
        console.log(error);
    }
})();


*/