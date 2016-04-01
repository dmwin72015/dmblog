/**
 * Created by admin on 2016/3/31.
 */
function test() {
    var reg = /^\/admin\//g;
};
module.exports = {
    loginFilter: function (req, res, next) {
        var url = req.url;
        var isAdmin = /^\/admin[\/]{0,1}/g.test(url);
        console.log(url, isAdmin);
        if (isAdmin) {
            console.log(req.session);
            if (req.session) {
                var name = req.session.userName;
                console.log(req.session.userName)
                next();
            }else{
                res.redirect('/huigou');
            }
        } else {
           next();
        }
    },
    loginFilter2:function(req, res, next){
        var isAdmin = /^\/admin[\/]{0,1}/g.test(req.url);
        if(isAdmin){
            console.log(req.session);
            res.end(req.session.userName);
        }
        next();
    }
}
