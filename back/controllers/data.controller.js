const Data = require('../models/crud');
const dataArray = {};

dataArray.getData = async (req, res) => {
  const data = await Data.find();
  res.json(data);
};

dataArray.postData = async(req, res) => {
  const data = new Data(req.body);
  console.log(data);
  await data.save();
  res.json({'status': 'date saved'});
};

module.exports = dataArray;