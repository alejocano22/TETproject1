# Proyecto 1 - Tópicos especiales en telemática
Estudiante: Alejandro Cano Múnera <br />
Universidad EAFIT (2020) <br />
# REQUISITOS FUNCIONALES DE LA APP
- El sistema permite iniciar sesión a los usuarios.
- El sistema verifica que el formulario de inicio de sesión tenga todos los campos.
- El sistema verifica que los datos de inicio de sesión cumplan con las validaciones.
- El sistema permite registrar nuevos usuarios.
- El sistema verifica que el formulario de registro tenga todos los campos.
- El sistema verifica que los datos de registro cumplan con las validaciones.
- El sistema permite a los usuarios visualizar los datos de Arduino (usuario, temperatura, humedad y GPS) asociados a sí mismo.
- El sistema permite a los usuarios cerrar sesión.

# REQUISITOS NO FUNCIONALES DE LA APP
- El sistema cuenta con persistencia de datos para los usuarios.
- El sistema cuenta con persistencia de datos para los dispositivos Arduino.
- El sistema realiza la autentificación de los usuarios haciendo uso de JWT.
- El sistema proporciona un token que expira a los 5 minutos de su creación.
- El sistema encripta la contraseña antes de guardarla en la base de datos.
- El sistema verifica si el apikey (token de verificación) de los Arduino si es el autentificado.

# TECNOLOGÍAS DE DESARROLLO

## EN EL BACKEND
- Node.js  
- MongoDB

## EN EL FRONTEND
- Angular

# ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND
- postArduino(): <br />
o   url: http://localhost:3000/arduino/post <br />
o   Descripción: Envía una petición tipo post de un Arduino. <br />

- getArduino():
o   url: http://localhost:3000/arduino/get?email= <br />
o   Parámetros: Se le pasa como parámetro el email al cual está asociado el Arduino <br />
o   Descripción: Envía una petición tipo get y devuelve los Arduinos asociados al email dado en los parámetros. <br />

- login():
o   url:  http://localhost:3000/user/login <br />
o   Descripción: Envía una petición tipo post con los parámetros email y password y se hacen las validaciones necesarias para autentificar el usuario. <br />

- register():
o   url: http://localhost:3000/user/register <br />
o   Descripción: Envía una petición tipo post con los parámetros name, email y password y se hacen las validaciones necesarias para crear el nuevo usuario. <br />

# AUTENTICACIÓN DE LOS SERVICIOS API REST

Cuando se inicia sesión se crea un JWT el cual tiene un tiempo determinado de uso (5 minutos), este se utiliza para autenticar el usuario y obtener los datos (de sensores Arduino) correspondientes a este usuario. Dicho token se crea cada vez que se inicia sesión y se destruye cuando se supera el tiempo de vida indicado, sin embargo, también se puede destruir automáticamente haciendo uso del botón de cerrar sesión.

Por otra parte, los sensores Arduino cuentan con un token especial que se requiere a la hora de mandar información, es decir, el controlador de Arduino en el backend verifica si la petición post que se intenta hacer si está autentificada con el token especial.
