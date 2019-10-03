const express = require('express');

const routes = express.Router();

//Controllers
const SessionController = require('./controller/SessionController');
const SpotController = require('./controller/SpotController');

routes.post('/session', SessionController.store);
routes.post('/spots', SpotController.store);

module.exports = routes;