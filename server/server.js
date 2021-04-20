var PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

const {Wit, log} = require('node-wit');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');

const cors = require('cors');
app.use(cors());

const apiRoute = require('../routes');

app.use(bodyparser.json());
app.use(bodyparser.text());

app.use('/api', apiRoute);


mongoose.connect(
    process.env.DBConn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Servidor escuchando en el puerto ' + PORT + ', conectado a la base de datos' )
);

app.listen(PORT);