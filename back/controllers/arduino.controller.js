const Arduino = require('../models/arduino');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getArduino = async (req, res) => {
  console.log("Hello");
  try {
    const arduino = await Arduino.find({
      user: req.query.email
    });
    res.send(arduino);
  } catch (e) {
    res.status(500).send({ status: 'ERROR', data: "e.message" });
  }
};

const postArduino = async (req, res) => {
  try {
    if (process.env.ARDUINO_TOKEN != req.headers.token) {
      res.status(500).send({ status: 'ERROR', data: "INVALID TOKEN" });
      return;
    }
    const arduino = new Arduino(req.body);
    await arduino.save();
    res.json({ 'status': 'Arduino saved' });
  } catch (e) {
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { getArduino, postArduino };