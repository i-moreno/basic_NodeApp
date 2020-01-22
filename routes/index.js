var express = require('express');
var router = express.Router();

let controllers = require('../controllers/index');

/* GET home page. */
router.get('/', controllers.homeGreeting);

module.exports = router;
