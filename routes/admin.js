/**
 * Created by admin on 2016/3/31.
 */
var express = require('express');
var router = express.Router();
router.get('/login', function (req, res, next) {
    var name = '亿友会';
    var pwd = 'abc';
    //req.body 获取post的数据
    var data = req.body;
    console.log(data)
    data.username = '亿友会';
    data.password = 'abc';
    if(data.username == name && data.password == pwd){
        res.render('admin/home',{
            name:name,
            notice_num:12,
            notice_list:['提示信息提示嘻嘻提示新','提示信息提示嘻嘻提示新','提示信息提示嘻嘻提示新','提示信息提示嘻嘻提示新']
        });
    }else{
        res.end("{'error':'0','status':'success','data':'bull'}");
    }
});

module.exports = router;
