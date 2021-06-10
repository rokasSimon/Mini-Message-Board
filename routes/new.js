var express = require('express');
var router = express.Router();

const Message = require('../models/Message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new/index', { rejected: false });
});

router.post('/', async function(req, res, next) {
    const text = req.body.text;
    const user = req.body.user;

    if (!text || !user) {
        res.render('new/index', { rejected: true });
    }
    else {
        await Message.create({ text: text, user: user});
        res.redirect('/');
    }
});

module.exports = router;
