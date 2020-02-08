const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  psw: { type: String, require: true }
});

module.exports = mongoose.model('user', userSchema); //Datos que va a almacenar la base de datos
//Así van a lucir los datos (El .json)