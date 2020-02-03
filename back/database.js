const mongoose = require('mongoose');

const URL = 'mongodb://localhost/p1db';

mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(db => console.log("DB is connected"))
  .catch(err => console.log(err));

module.exports = mongoose;