const User = require('../models/user');
const userArray = {};

userArray.getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (e) {
    console.log('getUser error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

userArray.postUser = async (req, res) => {
  try{
  const user = new User(req.body);
  console.log(user);
  await user.save();
  res.json({ 'status': 'User saved' });
} catch (e) {
  console.log('postUser error:', e);
  res.status(500).send({ status: 'ERROR', data: e.message });
}
};

module.exports = userArray;