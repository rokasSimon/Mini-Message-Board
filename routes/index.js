var express = require('express');
var router = express.Router();

const Message = require('../models/Message');
const cat = require('../extensions/Catch');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const [data, err] = await cat(Message.find());

  if (err) {
    console.log("Couldn't get message data");
    res.render('index', { messages: [] });
  }
  else {
    res.render('index', { messages: data });
  }
});

module.exports = router;
