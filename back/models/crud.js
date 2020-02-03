const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
  user: { type: String, require: true },
  temperature: { type: String, require: true },
  humidity: { type: String, require: true },
  gps: { type: String, require: true }
});

module.exports = mongoose.model('data', dataSchema); //Datos que va a almacenar la base de datos
//Así van a lucir los datos (El .json)
