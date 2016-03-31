/**
 * Created by admin on 2016/3/31.
 */
var uid = require('uid-safe');
var setting = {
    secret: 'dmblog',
    name:'dmblog',
    genid: function (req) {
        return uid() // use UUIDs for session IDs
    },
    resave:false,
    cookie: {maxAge: 60000,secure:false},
    saveUninitialized: true

}
module.exports = setting;
