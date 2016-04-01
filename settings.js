/**
 * Created by admin on 2016/3/31.
 */
var uid = require('uid-safe');
var setting = {
    secret: 'maroro.red',
    name:'dmblog',
    genid: function (req) {
        return uid.sync(18) // use UUIDs for session IDs
    },
    resave:false,
    cookie: {maxAge: 60000,secure:false},
    saveUninitialized: true

}
var str = uid(18,getString)
var str2 = uid.sync(18);
//console.log(str2);
function getString(str){
    //console.log(str);
}
module.exports = setting;
