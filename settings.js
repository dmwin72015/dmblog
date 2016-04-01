/**
 * Created by admin on 2016/3/31.
 */
var uid = require('uid-safe');
var setting = {
    secret: 'dm_blog',
    name:'dmblog',
    // genid: function (req) {
    //     return uid() // use UUIDs for session IDs
    // 	  这个地方的sessionID，返回的是一个函数，但是需要的是一个字符串
    // 	  需要进步研究一下这个插件！！！！
    //    一直从session里面无法虎丘保存的数据就是有sessionID没有给值。
    // },
    resave:false,
    cookie: {maxAge: 60000,secure:false},
    saveUninitialized: true
}
module.exports = setting;
