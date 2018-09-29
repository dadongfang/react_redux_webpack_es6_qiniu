var path = require('path');
var webpack = require('webpack');
// var fs = require('fs');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HappyPack = require('happypack');
var os = require('os');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
// 包分析工具，使用方法启动命令后带--record参数
// let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

var config = require('../config');
var port = config.port;
var rootDir = config.rootDir;
// var publicPath = '//' + config.qiniu.host + '/' + config.qiniu.pre_path + '/';
var publicPath = '/';

// function getEntries(){
//   var entrySrc = path.join(__dirname, rootDir.develop, '/js/components/');
//   var files = fs.readdirSync(entrySrc);
//
//   var regexp = /(.*)\.js$/;
//   var map = {};
//
//   files.forEach((file)=>{
//     var matchfile = file.match(regexp);
//     if( matchfile ){
//       map[matchfile[1]] = path.resolve(entrySrc + matchfile[0])
//     }
//   });
//
//   return map;
// }

module.exports = function ({node_env}) {
  var develop = node_env == 'development';
  // var entries = getEntries();
  var entries = {
    main: [path.join(__dirname, '../', rootDir.develop, '/index.js')],
    // vendor: ['webpack-zepto']
  };
  if (develop) {
    entries.main.unshift('webpack-hot-middleware/client?reload=true')
  }
  var chunks = Object.keys(entries);
  var plugins = [
    // new ExtractTextPlugin("[name].css")
    new webpack.ProvidePlugin({
      $: 'webpack-zepto'
    }),
    // 把指定文件夹下的文件复制到指定的目录
    new CopyPlugin([
      { from: rootDir.develop + '/js/lib.js', to: 'js' },
      { from: rootDir.develop + '/js/storage.min.js', to: 'js' },
      { from: rootDir.develop + '/static', to: 'static' }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir.develop, 'index_temp.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      filename: (develop ? '../' : '') + 'index.html'
    }),
    // 多进程方式实现webpack多线程执行任务
    new HappyPack({
      id: 'happyBabelJs', // 用id来标识happypack处理哪些文件
      loaders: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['syntax-dynamic-import', 'transform-runtime'],
          cacheDirectory: true
        }
      }], // 如何处理，用法和loader的配置一样
      threadPool: happyThreadPool, // 共享进程池
      verbose: true // 允许HappyPack输出日志
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    }),
    // new BundleAnalyzerPlugin()
  ];

  if (develop) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }

  return {
    entry: entries,
    output: {
      path: path.resolve(develop ? rootDir.build : rootDir.production),
      publicPath: develop ? '/__build/' : publicPath,
      filename: develop ? 'js/[name].js' : 'js/[hash:8].[name].min.js',
      chunkFilename: develop ? 'js/[name].chunk.js' : 'js/[chunkhash:8].[name].chunk.min.js'
    },
    resolve: {
      alias: {
        src: path.join(__dirname, "../src")
      },
      extensions: ['.js', '.css']
    },
    module: {
      rules: [{
        test: /\.js[x]?$/,
        exclude: path.join(__dirname, '../node_modules/'),
        use: 'happypack/loader?id=happyBabelJs'
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          'url-loader?limit=10000&name=/img/[hash:8].[name].[ext]'
        ]
      }]
    },
    plugins: plugins,
    optimization: {
      splitChunks: { // 提取公共代码
        name: "common",
        chunks: 'initial',
        minChunks: chunks.length,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    devtool: develop ? 'eval' : false,
    devServer: {
      hot: true,
      inline: true,
      progress: true
    },
    mode: develop ? 'development' : 'production'
  };
};
