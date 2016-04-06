/**
 * Created by admin on 2016/3/31.
 */
function test() {
    var reg = /^\/admin\//g;
};
module.exports = {
    loginFilter: function (req, res, next) {
        var url = req.url,
            isAdmin = /^\/admin[\/]{0,1}$|^\/admin\/./g.test(url),
            isAdminLogin = /^\/admin\/login[\/]{0,1}$/g.test(url);
        if (isAdmin && !isAdminLogin) {
            console.log(url, isAdminLogin);
            if (req.session && req.session.user) {
                res.redirect('/admin/home');
            }else{
                res.redirect('/admin/login');
            }
            //res.end(url+'---'+isAdminLogin);
        }else{
            next();
        }
    }
}
