const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const HomeController = require('../controllers/HomeController');

router.get('/', LoginController.Login);
router.post('/home', HomeController.Home);

 

module.exports = router;