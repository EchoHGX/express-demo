var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');

//引入路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbRouter = require('./routes/dbRouter');
var adminRouter = require('./routes/admin');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置模块目录
app.set('view engine', 'ejs');//设置模块引擎室ejs模块

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser('lv_shop'));
app.use(session({
    secret: 'lv_shop',//与cookieParser中的一致 resave: true,
    saveUninitialized:true }));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
 	next();
});

app.use(function(req, res, next){

	// console.log('header',req.get('Authorization'));
	
  if(/^\/admin\/login/.test(req.originalUrl) || req.session.userSign ){
  	next();
  }else{
  	res.status(302).json({message: '未登录或登录过期，请先登录',data:[]})
  }
})


//express.static() 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

//分配路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/db',dbRouter);
app.use('/admin',adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8888, () => console.log('Example app listening on port 3005!'))

module.exports = app;
