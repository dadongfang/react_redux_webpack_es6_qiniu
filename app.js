var http = require('http');
var koa = require('koa');
var server = require('koa-static');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');

var debug = process.env.NODE_ENV !== 'production';
var webpackConf = require('./webpack.config')({
  node_env: process.env.NODE_ENV
});

var config = require('./config');
var port = config.port.develop;
var rootDir = config.rootDir;

var app = koa();

// 开发环境和生产环境对应不同的目录
var viewDir = debug ? rootDir.develop : rootDir.production;
console.log('view dir path: /' + viewDir + '/');

if(debug) {
  app.use(webpackDevMiddleware(webpack(webpackConf), {
    contentBase: webpackConf.output.path,
    publicPath: webpackConf.output.publicPath,
    hot: true,
    stats: webpackConf.devServer.stats,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }));
}else {
  port = config.port.production;
}

// 配置静态资源和入口文件
app.use(server(path.resolve(__dirname, viewDir), {
  maxage: 0
}));

app = http.createServer(app.callback());

app.listen(port, '0.0.0.0', function() {
  console.log('app listen port ' + port + ' success.');
});
