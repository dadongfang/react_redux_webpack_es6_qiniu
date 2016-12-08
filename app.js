var express = require('express');
var path = require('path');
var webpack = require('webpack');
// var koaWebpackDevMiddleware = require('koa-webpack-dev-middleware');
// var koaWebpackHotMiddleware = require('koa-webpack-hot-middleware');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var debug = process.env.NODE_ENV !== 'production';
var webpackConf = require('./webpack.config')({
  node_env: process.env.NODE_ENV
});
var compiler = webpack(webpackConf);

var config = require('./config');
var port = config.port.develop;
var rootDir = config.rootDir;

var app = express();

// 开发环境和生产环境对应不同的目录
var viewDir = debug ? rootDir.develop : rootDir.production;
console.log('view dir path: ' + viewDir);

if(debug) {
  // app.use(koaWebpackDevMiddleware(compiler, {
  //   contentBase: webpackConf.output.path,
  //   publicPath: webpackConf.output.publicPath,
  //   hot: true,
  //   stats: webpackConf.devServer.stats,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     "X-Custom-Header": "yes"
  //   },
  //   noInfo: false
  // }));
  // app.use(koaWebpackHotMiddleware(compiler));

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConf.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
}else {
  port = config.port.production;
}

// 配置静态资源和入口文件
app.use(express.static(path.resolve(__dirname, viewDir)));

// prerender middleware
var prerender = require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000/').set('beforeRender', function(req, done) {
    console.log(req.url)
    done()
}).set('afterRender', function(err, req, prerender_res) {
    console.log(req.url, prerender_res.body)
})
app.use(prerender);

// This will ensure that all routing is handed over to react
app.get('*', function(req, res) {
  res.sendfile('./src/index.html');
});

app.listen(port, '0.0.0.0', function() {
  console.log('app listen port ' + port + ' success.');
});
