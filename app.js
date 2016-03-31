var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');
var session = require('express-session');
var settings = require('./settings');


//自定义的拦截器
var filter = require('./filter/filter');

//路由器
var routes = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//旧版
//var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'})
//app.use(logger('combined', {stream: accessLogStream}))
//设置日志保存方式2016-03-26
var logDirectory = __dirname + '/logs';
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYY-MM-DD',
    filename: logDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false
});
//use 自定义的拦截器
//app.use(filter.loginFilter);
//使用session
app.use(session(settings));
// app.use(logger('combined', { stream: accessLogStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(settings.secret));
app.use(express.static(path.join(__dirname, 'public')));

//路由设置
app.use('/', routes);
app.use('/users', users);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('404', {
      'error':err,
      'message':'404 NOT Found'
    });
    // next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

function getDate() {
    var oDate = new Date;
    var y = oDate.getFullYear();
    var m = oDate.getHours();
    var d = oDate.getDate();
    return '' + y + '-' + m < 10 ? '0' + m : m + d < 10 ? '0' + d : d;
}


module.exports = app;
