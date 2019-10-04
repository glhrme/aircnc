const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const routes = express.Router();

const upload = multer(uploadConfig);

//Controllers
const SessionController = require('./controller/SessionController');
const SpotController = require('./controller/SpotController');
const DashboardController = require('./controller/DashboardController');
const BookingController = require('./controller/BookingController');

//Session - Login
routes.post('/session', SessionController.store);

//Spots All
routes.get('/spots' , SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

//Dashboard
routes.get('/dashboard', DashboardController.show);

//Bookings - Reservas
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;