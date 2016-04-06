module.exports = {
	loginFilter:function(req, res, next){
		var url = req.baseUrl;
		var result = /^\/admin\//g.exec(url);
		if(result){
            console.log(url);
			req.session.user?res.redirect('admin/home'):res.redirect('admin/login?statusCode=0123');
		}else{
			next();
		}
	}
}