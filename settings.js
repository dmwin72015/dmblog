/**
 * Created by admin on 2016/3/31.
 */
var uid = require('uid-safe');
var setting = {
    secret: 'dmblog',
    genid: function (req) {
        return uid() // use UUIDs for session IDs
    },
    cookie: {maxAge: 60000},
    saveUninitialized: false

}
module.exports = setting;
