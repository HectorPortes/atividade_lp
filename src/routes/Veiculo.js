// importação das bibliotecas 
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

// rota raiz para veiculo
rotas.get('/', (req, res) => {
    res.status(200).send({
        mensagem: `Você está na rota raiz de veículo.`
    });
});


// rota put para veiculo
rotas.put('/', (req, res) => {

    const atualizacaoVeiculo = {
        idVeiculo: req.body.idVeiculo,
        preco: req.body.preco
    }

    res.status(200).send({
        mensagem: 'Os dados do veiculo foram atualizados com sucesso.',
        dadosAtualizadosVeiculo: atualizacaoVeiculo
    });
});

// rota post para veiculo
rotas.post('/', (req, res) => {

    //Implementação do recebimento dos dados parar salvar no BD
    const novoVeiculo = {
        nome: req.body.nome,
        fabricante: req.body.fabricante,
        ano: req.body.ano,
        combustivel: req.body.combustivel,
        cor: req.body.combustivel,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Veiculo cadastrado com sucesso.',
        dadosNovoVeiculo: novoVeiculo
    });
});

// rota delete para docente
rotas.delete('/', (req, res) => {

    const idVeiculo = req.body.idVeiculo

    consultaIdBD = 123

    if(idVeiculo == 123) {
        res.status(202).send({
            mensagem: `O veiculo de id: ${idVeiculo} excluído com sucesso.`
        });
    } else {
        res.status(200).send({
            mensagem: 'O veiculo não foi encontrado no banco de dados.'
        });
    };
});

// exportar o código que manipula a rota para docente
module.exports = rotas