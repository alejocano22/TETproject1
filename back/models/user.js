const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  psw: { type: String, required: true }
});

module.exports = mongoose.model('user', userSchema); //Datos que va a almacenar la base de datos
//Así van a lucir los datos (El .json)