//index.js
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
*/

    } catch (error) { 
        console.log(error);
    }
})();