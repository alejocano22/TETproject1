const arduinoRoutes  = require('./arduino.routes');
const userRoutes = require('./user.routes');

module.exports = app => {
  app.use('/arduino', arduinoRoutes);
  app.use('/user', userRoutes);
};