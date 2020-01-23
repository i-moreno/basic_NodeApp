var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.get_lead);
router.get('/leads', landing.show_leads);

module.exports = router;
