const express = require('express');
const mongoose = require('mongoose');
const {cloud, local} = require('./config/database.json');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);

//Config está no Google Drive

try{
    mongoose.connect(local,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
} catch (error) {
    console.log(error);
}

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});


app.use((req, res, next)=>{
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});


/*
    req.query = acessar os query params / parametros url no get
    req.params = parametros url no post e put
    req.body = corpo da requisição
*/
//Para entender o corpo com requisições json
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);



server.listen(process.env.PORT || 2000, ()=>{
    console.log("Aplicação sendo executada");
});