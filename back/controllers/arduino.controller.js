const Arduino = require('../models/arduino');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getArduino = async (req, res) => {
  try {
    console.log(req.query);
    const arduino = await Arduino.find({
      user: req.query.email
    });
    res.send(arduino);
  } catch (e) {
    console.log('getArduino error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};


const postArduino = async (req, res) => {
  try {
    const arduino = new Arduino(req.body);
    console.log(arduino);
    await arduino.save();
    res.json({ 'status': 'Arduino saved' });
  } catch (e) {
    console.log('postArduino error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = {getArduino, postArduino};