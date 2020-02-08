const Arduino = require('../models/arduino');
const arduinoArray = {};

arduinoArray.getArduino = async (req, res) => {
  try {
    const arduino = await Arduino.find();
    res.json(arduino);
  } catch (e) {
    console.log('getArduino error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};


arduinoArray.postArduino = async (req, res) => {
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

module.exports = arduinoArray;