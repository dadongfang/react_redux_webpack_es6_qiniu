var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var apiRouter = require('./mock/api')

var debug = process.env.NODE_ENV !== 'production';
var webpackConf = require('./tools/webpack.config')({
  node_env: debug ? 'development' : 'production'
});
var compiler = webpack(webpackConf);

var config = require('./config');
var port = config.port.develop;
var rootDir = config.rootDir;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
var counter = 0;
app.get('/home', function(req, res) {
  res.render('index')
})
app.get('/layout', function(req, res) {
  counter++;
  app.locals.counter = req.query.counter || counter.toString();
  res.render('layout', {counter: app.locals.counter});
 });
app.locals.title = "Welcome to Visitor";
app.locals.counter = counter;

// 接口参数接收机响应解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', apiRouter)

// 开发环境和生产环境对应不同的目录
var viewDir = debug ? rootDir.develop : rootDir.production;
console.log('view dir path: ' + viewDir);

if (debug) {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConf.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  port = config.port.production;
}

// 配置静态资源和入口文件
app.use(express.static(path.resolve(__dirname, viewDir)));

// 默认跳转到首页
app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, viewDir + '/index.html'))
})

app.listen(port, '0.0.0.0', function () {
  console.log('app listen port ' + port + ' success.');
});
