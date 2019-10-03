const express = require('express');
const mongoose = require('mongoose');
const {username, password} = require('./config/database.json');
const routes = require('./routes');

const app = express();

/*
    req.query = acessar os query params / parametros url no get
    req.params = parametros url no post e put
    req.body = corpo da requisição
*/
//Para entender o corpo com requisições json
app.use(express.json());
app.use(routes);

try{
    mongoose.connect('mongodb://'+username+':'+password+'@memepi-shard-00-00-w9wrm.gcp.mongodb.net:27017,memepi-shard-00-01-w9wrm.gcp.mongodb.net:27017,memepi-shard-00-02-w9wrm.gcp.mongodb.net:27017/semana9?ssl=true&replicaSet=memepi-shard-0&authSource=admin&retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
} catch (error) {
    console.log(error);
}

app.listen(2000, ()=>{
    console.log("Aplicação sendo executada");
});