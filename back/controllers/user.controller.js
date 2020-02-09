const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const expiresIn = 60 * 10;  //10min

const login = async (req, res) => {
  try {
    const { email, psw } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isOk = await bcrypt.compare(psw, user.psw);
      if (isOk) {
        //Crear el JWT
        const token = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET, //Variables de entorno
          { expiresIn }
        );
        res.send({
          status: 'OK',
          data: {
            token,
            expiresIn
          }
        });
      } else {
        res.status(403).send({ status: 'INVALID_PASSWORD', message: '' });
      }
    } else {
      res.status(401).send({ status: 'USER_NOT_FOUND', message: '' });
    }
  } catch (e) {
    res.status(500).send({ status: 'ERROR', message: e.message });
  }
};


const register = async (req, res) => {
  try {
    const { name, email, psw } = req.body;
    const hash = await bcrypt.hash(psw, 15);

    const user = await User.create({
      name,
      email,
      psw: hash

    });
    res.send({ status: 'OK', message: 'user created' });
  } catch (e) {
    if (e.code && e.code === 11000) {
      res
        .status(400)
        .send({ status: 'DUPLICATED_VALUES', message: e.keyValue });
      return;
    }
     console.log('error createuser', e.message);
    res.status(500).send({ status: 'ERROR', message: e.message });
  }
};


const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (e) {
    console.log('getUser error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};


module.exports = {login, register, getUser};