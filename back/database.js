const mongoose = require('mongoose');

const URL = process.env.DB_ROUTE;

mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(db => console.log("DB is connected"))
  .catch(err => console.log(err));

module.exports = mongoose;