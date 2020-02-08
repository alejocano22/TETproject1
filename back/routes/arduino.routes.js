const express = require('express');
const router = express.Router();

const arduino = require('../controllers/arduino.controller');

router.get('/', arduino.getArduino);
router.post('/', arduino.postArduino);

module.exports = router;
