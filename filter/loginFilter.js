function a(){

}
module.exports = {
	loginFilter:function(req, res, next){
		var url = req.url;console.log(url);
		var result = /^\/admin\//g.exec(url)
		if(result){
			console.log('后台登录');
			res.redirect('/blog');
		}else{
			next();
		}
	}
}