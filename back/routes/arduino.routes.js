const express = require('express');
const router = express.Router();

const arduino = require('../controllers/arduino.controller');

router.get('/get', arduino.getArduino);
router.post('/post', arduino.postArduino);

module.exports = router;
