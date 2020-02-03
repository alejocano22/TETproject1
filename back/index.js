const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const{ mongoose } = require('./database');

//configuraciones del servidor
app.set('port', process.env.PORT || 3000);

//middlewares para procesar los datos
app.use(morgan('dev'));
app.use(express.json());  //Para que el servidor pueda entender datos .json

//Cors = Permisos
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
// app.use(cors({ origin: 'http://localhost:4200/'}));


//Rutas
app.use('/api/data', require('./routes/crud.routes'));


//Inicializar el server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
})