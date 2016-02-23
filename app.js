var http = require('http');
var koa = require('koa');
var server = require('koa-static');
var path = require('path');
var webpack = require('webpack');
var proxy = require('koa-proxy');
var koaWebpackDevMiddleware = require('koa-webpack-dev-middleware');
var koaWebpackHotMiddleware = require('koa-webpack-hot-middleware');
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');

var debug = process.env.NODE_ENV !== 'production';
var webpackConf = require('./webpack.config')({
  node_env: process.env.NODE_ENV
});
var compiler = webpack(webpackConf);

var config = require('./config');
var port = config.port.develop;
var rootDir = config.rootDir;

var app = koa();

// 开发环境和生产环境对应不同的目录
var viewDir = debug ? rootDir.develop : rootDir.production;
console.log('view dir path: /' + viewDir + '/');

if(debug) {
  app.use(koaWebpackDevMiddleware(compiler, {
    contentBase: webpackConf.output.path,
    publicPath: webpackConf.output.publicPath,
    hot: true,
    stats: webpackConf.devServer.stats,
    headers: {
      'Access-Control-Allow-Origin': '*',
      "X-Custom-Header": "yes"
    },
    noInfo: false
  }));
  app.use(koaWebpackHotMiddleware(compiler));

  // app.use(webpackDevMiddleware(compiler, {
  //   noInfo: true,
  //   publicPath: webpackConf.output.publicPath
  // }));
  //
  // app.use(webpackHotMiddleware(compiler));

  // app.use(proxy({
  //   url: 'js/',
  //   match: /^__build\/js\//
  // }));
}else {
  port = config.port.production;
}

// 配置静态资源和入口文件
app.use(server(path.resolve(__dirname, viewDir), {
  maxage: 0
}));

http.createServer(app.callback());

app.listen(port, '0.0.0.0', function() {
  console.log('app listen port ' + port + ' success.');
});
