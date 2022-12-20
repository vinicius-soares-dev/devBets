const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const HomeController = require('../controllers/HomeController');
const BetsController = require('../controllers/BetsController');

router.get('/', LoginController.Login);
router.post('/home', HomeController.Home);
router.post('/betsresult', BetsController.Bets);

 

module.exports = router;