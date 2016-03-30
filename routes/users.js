var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/dong', function(req, res, next) {
    console.log(req.url);
    res.send(req.baseUrl+req.url);
});
module.exports = router;
