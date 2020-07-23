const express = require('express');

const mongoose = require('mongoose');
const church = require('mongoose');

const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o banco de dados
mongoose.connect(
                    'mongodb://localhost:27017/nodeapi'
                    , { useNewUrlParser: true 
                        , useUnifiedTopology: true     
                      } 
);

// Iniciando o bando da igreja
church.connect(
                'mongodb://localhost:27017/church'
                , {
                    useNewUrlParser: true
                    , useUnifiedTopology: true
                }
);


// Criando a tabela
//require('./src/models/Product');
requireDir('./src/models');

const Product = mongoose.model('Product');
const Church = mongoose.model('Church');


// Primeira rota
app.get('/', (req, res) => {

    Product.create({
        title: 'React Native'
        , description: 'Build native app  with React'
        , url: 'http://github.com/facebook/react-native'
    });

    Church.create({
        nameChurch: 'MINISTÉRIO LUZ DA PALAVRA'
        , churchPastor: 'Wellington Candido'
        , contact: '(21) 99999-8888'
    });

    Church.create({
        nameChurch: 'IPAN'
        , churchPastor: 'Emerson Pinheiro'
        , contact: '(21) 99999-8888'
    });


    res.send( 'hello world - zord');
});

app.listen(3001);