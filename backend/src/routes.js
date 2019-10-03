const express = require('express');

const routes = express.Router();

//Controllers
const SessionController = require('./controller/SessionController');

routes.post('/session', SessionController.store);

module.exports = routes;