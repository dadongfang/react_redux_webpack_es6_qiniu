var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HappyPack = require('happypack');
var os = require('os');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
// 包分析工具，使用方法启动命令后带--record参数
// let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

var config = require('../config');
var pwa = config.pwa;
var spa = config.spa;
var rootDir = config.rootDir;
// var publicPath = '//' + config.qiniu.host + '/' + config.qiniu.pre_path + '/';
var publicPath = '/';

var ignoreFileList = ['router.js']
function getEntries() {
  var entrySrc = path.join(__dirname, '../', rootDir.develop);
  var files = fs.readdirSync(entrySrc);

  var regexp = /(.*)\.js$/;
  var entry = {};

  files.forEach(filename=> {
    var matchfile = filename.match(regexp);
    if( matchfile && ignoreFileList.indexOf(filename) == -1 ) {
      entry[matchfile[1]] = path.resolve(entrySrc + filename)
    }
  });

  return entry;
}

// 自动生成入口文件，入口js名必须和入口文件名相同
// 例如，a页的入口文件是a.html，那么在js目录下必须有一个a.js作为入口文件
function outputTemplate(develop, entries) {
  var templateSrc = path.join(__dirname, '../', rootDir.develop);
  var pages = fs.readdirSync(templateSrc);

  var template = []
  pages.forEach(function(filename) {
    var matchfile = filename.match(/(.+)\.html$/);
    if(matchfile && matchfile[1].indexOf('_temp') != -1) {
      // @see https://github.com/kangax/html-minifier
      var outputFile = filename.split('_')[0] + '.html'
      var conf = {
        template: path.resolve(templateSrc + filename),
        inject: 'body',
        minify: {
          collapseWhitespace: true,
          removeComments: true
        },
        filename: (develop ? '../' : '') + outputFile
      };
      if(matchfile[1] in entries) {
        // 一下配置是把js和相关的html文件一一对应，如果不加此配置，就会把所有的js都注入到html中，显然多余
        conf.chunks = ['common', matchfile[1]];
      }

      template.push(new HtmlWebpackPlugin(conf));
    }
  });

  return template;
}

module.exports = function ({node_env}) {
  var develop = node_env == 'development';
  var entries = spa ? {
    main: [path.join(__dirname, '../', rootDir.develop, '/index.js')],
  } : getEntries();
  // entries.vendor = ['webpack-zepto']

  var chunks = Object.keys(entries);
  if (develop) {
    var i = 0
    var len = chunks.length
    for(i; i < len; i++) {
      entries[chunks[i]].unshift('webpack-hot-middleware/client?reload=true')
    }
  }

  var plugins = [
    // new ExtractTextPlugin("[name].css")
    new webpack.ProvidePlugin({
      $: 'webpack-zepto'
    }),
    // 把指定文件夹下的文件复制到指定的目录
    new CopyPlugin([
      { from: rootDir.develop + '/js/lib.js', to: 'js' },
      { from: rootDir.develop + '/js/storage.min.js', to: 'js' },
      { from: rootDir.develop + '/static', to: 'static' },
      { from: rootDir.develop + '/manifest.json', to: 'manifest.json' },
    ]),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(rootDir.develop, 'index_temp.html'),
    //   minify: {
    //     collapseWhitespace: true,
    //     removeComments: true
    //   },
    //   filename: (develop ? '../' : '') + 'index.html'
    // }),
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

  plugins.push(...outputTemplate(develop, entries))

  if(pwa) {
    /*
      这里也可以使用 WorkboxPlugin.InjectManifest({}) 配置
      但是需要 配置 swSrc 指明模板 service-worker 文件
      WorkboxPlugin.GenerateSW({}) 可以直接生成 service-worker 文件
    */
    const WorkboxPlugin = require('workbox-webpack-plugin');
    plugins.push(
      new WorkboxPlugin.GenerateSW({
        cacheId: 'webpack-pwa', // 设置前缀
        skipWaiting: true, // 强制等待中的 Service Worker 被激活
        clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
        swDest: 'service-wroker.js', // 输出 Service worker 文件
        globPatterns: ['**/*.{html,js,css,png,jpg,jpeg,ico,json}'], // 匹配的文件
        globIgnores: ['service-wroker.js'], // 忽略的文件
        runtimeCaching: [
          // 配置路由请求缓存
          {
            urlPattern: /.*\.(html|js|css|png|jpg|jpeg,ico,json)/, // 静态资源
            handler: 'CacheFirst', // 缓存优先
            // options: {
            //   cacheName: 'webpack-assets-cache',
            //   expiration: { // 过期设置
            //     // maxEntries: 5,
            //     maxAgeSeconds: 7*2460*60,
            //   }
            // }
          },
          // {
          //   urlPattern: /.*\/api\/.*\/(cart|coupon)/, // 购物车接口
          //   handler: 'NetworkFirst', // 网络优先
          // },
          // {
          //   urlPattern: /.*\.*/, // 其他
          //   handler: 'StaleWhileRevalidate', // 先读缓存，再取网络
          //   options: {
          //     cacheableResponse: {
          //       statuses: [200]
          //     }
          //   }
          // }
        ]
      })
    )
  }

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
