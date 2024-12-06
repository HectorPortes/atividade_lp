// importação da biblioteca Express
// para instalar rode o comando: npm install express
const express = require('express');

// instalação: npm install body-parser
const bodyParser = require('body-parser');

// criação de um app Express
const app = express();

// módulo para subir arquivo
const fs = require('fs');

// configurar o body-parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// importação das rotas
const veiculoRotas = require('./src/routes/Veiculo');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

// rota de aplicação
app.get('/', (req, res) => {

    // carrega o arquivo html para uma constante
    const arquivoHtml = fs.readFileSync('./src/pages/home.html')
    
    // responde com o arquivo html
    res.status(200).end(arquivoHtml)
});

// utilizar as rotas
app.use('/veiculo' , veiculoRotas);

// rodar a aplicação
app.listen(port, hostname, console.log('Servidor está rodando'));