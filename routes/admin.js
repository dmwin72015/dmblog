/**
 * Created by admin on 2016/3/31.
 */
var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
    res.redirect('admin/login');
})
router.get('/login/undo', function (req, res, next) {
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
router.post('/login', function (req, res, next) {
    var data = req.body;
    //TODO 校验账号密码
    req.session.userID = data.username;
    req.session.user = data;
    req.session.save();
    console.log(req.sessionStore,'保存时.....');
    console.log('保存对象.....');
    res.send('{"error":0,"status":"success","data":' + JSON.stringify(data) + '}');
});
router.get('/login', function (req, res, next) {
    res.render('admin/login');
});
router.get('/home', function (req, res, next) {
    for(var name in req.session ){
        //console.log(name);
    }
    console.log(req.session,'session对象获取时...')
    console.log(req.sessionStore,'获取时.....');
    if (req.session) {
        res.render('admin/home', {
            name: '张三',
            notice_num: 12,
            notice_list: ['提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新']
        });
    } else {
        next();
    }
})
module.exports = router;
