const express = require('express');
const router = express.Router();

const data = require('../controllers/data.controller');

router.get('/', data.getData);
router.post('/', data.postData);

module.exports = router;
