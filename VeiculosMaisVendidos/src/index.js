

const express = require('express');
const Cors = require('cors');
const config = require('dotenv/config');
const path = require('path');

const data = require('../data.json');

const server = express();

server.use(Cors());
// server.use(express.static(path.json(__dirname, 'public')));

// TESTE PRIMÁRIO!
server.get('/ping', (req, res) => {
    try{

        res.status(201).send('pong!');

    }catch(err){
        throw new Error('Erro ao consultar informações: ' + err.message);
    }
})

// CONSULTA

server.get('/veiculos', (req, res) => {
    try{

        res.status(200).json(data);


    }catch(err){
        throw new Error('Erro ao consultar informações: ' + err.message);

    }
})


server.listen(process.env.PORT, () => {
    const dia = new Date().getDate();
    const mes = new Date().getMonth();
    const ano = new Date().getFullYear();
    const hora = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    console.log(`API DE CONSULTA - VEÍCULOS MAIS VENDIDOS: PORT ` + process.env.PORT);
    console.log(`DATA DE INICIALIZAÇÃO: ${dia}/${mes}/${ano} -> ${hora}:${min}:${sec}`);
})