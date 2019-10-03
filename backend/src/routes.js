const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const routes = express.Router();

const upload = multer(uploadConfig);

//Controllers
const SessionController = require('./controller/SessionController');
const SpotController = require('./controller/SpotController');

routes.post('/session', SessionController.store);

routes.get('/spots' , SpotController.index);
routes.post('/spots', upload.single('thumbnail') ,SpotController.store);

module.exports = routes;