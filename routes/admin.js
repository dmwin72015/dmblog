/**
 * Created by admin on 2016/3/31.
 */
var express = require('express');
var router = express.Router();
var tools = require('../model/mysql-pool');
var findByID = tools.findByID,
    findByName = tools.findByName,
    query = tools.query,
    queryBlur = tools.queryBlur;

router.get('/', function(req, res, next) {
    if (req.session.user) {
        req.session.lastPath = req.path;
        res.redirect('home');
    } else {
        res.redirect('login');
    }
});
router.get('/login/undo', function(req, res, next) {
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
    findByName(data.username,function(err,rows){
        if(err)  res.end('{"error":1,"text":"用户名或密码错误","data":null');
        if(rows.length<=0){
            res.end('{"error":2,"text":"用户名或密码错误","data":null}');
            return;
        }
        if(rows.length>1){
            res.status(500).end('服务器出错');
        }else{
            rows[0]['age'] == data.passwd ?
                res.end('{"error":0,"text":"验证成功","data":null}'):
                res.end('{"error":1,"text":"用户名或密码错误","data":null}');
        }
    })

});
router.get('/login', function(req, res, next) {
    if(req.session.user){
        res.render('admin/home',{
            name:req.session.user.username,
            notice_num: req.session.user.passwd,
            display:'none',
            notice_list:[]
        });
    }
    res.render('admin/login');
});
router.get('/home', function(req, res, next) {
    if (req.session.user) {
        req.session.lastPath = req.path;
        var name = req.session.user.username;
        var pwd = req.session.user.passwd;
        res.render('admin/home', {
            name: name,
            notice_num: pwd,
            display:'block',
            notice_list: ['提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新', '提示信息提示嘻嘻提示新']
        });
    } else {
        res.redirect('login?code=12');
    }
})
module.exports = router;
