var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.dir(req)
	var str = '';
	for(var name in req){
		str += (name+',')
	}
	console.log(str);
    res.render('index', { title: 'Express' });
});
module.exports = router;
