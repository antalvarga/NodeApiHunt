const express = require('express');

const mongoose = require('mongoose');
const church = require('mongoose');

const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());

/*
// Iniciando o banco da igreja
church.connect(
                'mongodb://localhost:27017/church'
                , {
                    useNewUrlParser: true
                    , useUnifiedTopology: true
                }
);
*/


// Iniciando o banco de dados
mongoose.connect(
                    'mongodb://localhost:27017/nodeapi'
                    , { useNewUrlParser: true 
                        , useUnifiedTopology: true     
                      } 
);


// Criando a tabela
//require('./src/models/Product');
requireDir('./src/models');

// const Product = mongoose.model('Product');
//const Church = mongoose.model('Church');

// Primeira rota
app.use('/api', require('./src/routes'));

app.listen(3001);