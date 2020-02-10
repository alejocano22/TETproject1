const mongoose = require('mongoose');
const { Schema } = mongoose;

const arduinoSchema = new Schema({
  user: { type: String, required: true },
  temperature: { type: String, required: true },
  humidity: { type: String, required: true },
  gps: { type: String, required: true }
});

module.exports = mongoose.model('arduino', arduinoSchema); //Datos que va a almacenar la base de datos
//Así van a lucir los datos (El .json)
