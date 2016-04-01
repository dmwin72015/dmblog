/**
 * Created by admin on 2016/3/31.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    if (req.session.user) {
        res.redirect('home');
    } else {
        res.redirect('login');
    }
});
router.get('/login/undo', function(req, res, next) {
    console.log(req.session);
    var name = '亿友会';
    var pwd = 'abc';
    //req.body 获取post的数据
    var data = req.body;
    data.username = '亿友会';
    data.password = 'abc';
    if (data.username == name && data.password == pwd) {
        res.render('admin/home', {
            name: name,
            notice_num: 12,
            notice_list: ['提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新']
        });
    } else {
        res.end("{'error':'0','status':'success','data':'bull'}");
    }
});
router.post('/login', function(req, res, next) {
    var data = req.body;
    //TODO 校验账号密码
    req.session.user = data;
    req.session.save();
    res.send('{"error":0,"status":"success","data":' + JSON.stringify(data) + '}');
});
router.get('/login', function(req, res, next) {
    res.render('admin/login');
});
router.get('/home', function(req, res, next) {
    if (req.session.user) {
        var name = req.session.user.username;
        var pwd = req.session.user.passwd;
        res.render('admin/home', {
            name: name,
            notice_num: pwd,
            notice_list: ['提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新']
        });
    } else {
        res.redirect('login?code=12');
    }
})
module.exports = router;
