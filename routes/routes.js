/**
 * Created by brian on 26/05/2017.
 */
var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a nigga');
});

router.get('/user', user.findAll);


module.exports = router;
