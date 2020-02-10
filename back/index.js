const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

//Variables de entorno
dotenv.config();

const routes = require('./routes');
const app = express();

const{ mongoose } = require('./database');

//configuraciones del servidor
app.set('port', process.env.PORT || 3000);

//middlewares para procesar los datos
app.use(morgan('dev'));
app.use(express.json());  //Para que el servidor pueda entender datos .json

//Cors = Permisos
app.use(cors({
  credentials: true,
}));

//Rutas
routes(app);

//Inicializar el server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
})