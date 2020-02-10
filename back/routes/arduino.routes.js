const express = require('express');
const router = express.Router();

const arduino = require('../controllers/arduino.controller');
const { isAuth } = require('../middlewares/auth');

router.get('/get', isAuth, arduino.getArduino);
router.post('/post',  arduino.postArduino);

module.exports = router;
