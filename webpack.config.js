var path = require('path');
var webpack = require('webpack');
// var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin= require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');
var port = config.port;
var rootDir = config.rootDir;
var publicPath = '//' + config.qiniu.host + '/' + config.qiniu.pre_path + '/';

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

module.exports = function(options) {
  var develop = 'true';
  if(options && options.node_env == 'production') {
    develop = false;
  }
  // var entries = getEntries();
  var entries = {
    // 'webpack-hot-middleware/client',
    main: path.join(__dirname, rootDir.develop, '/js/main'),
    // vendor: ['webpack-zepto']
  };
  var chunks = Object.keys(entries);
  var plugins = [
    // new ExtractTextPlugin("[name].css")
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: chunks,
      // Modules must be shared between all entries
      minChunks: chunks.length // 提取所有chunks共同依赖的模块
    }),
    new webpack.ProvidePlugin({
      global: 'global',
      $: 'webpack-zepto'
    }),
    //把指定文件夹下的文件复制到指定的目录
    new CopyPlugin([
      {from: rootDir.develop + '/tmpl'},
      {from: rootDir.develop + '/static', to: 'static'}
    ]),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(develop ? 'development' : 'production')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir.develop, 'index_temp.html'),
      minify: {
          collapseWhitespace: true,
          removeComments: true
      },
      filename: (develop ? '../' : '') + 'index.html'
    })
  ];

  if(develop) {
    plugins.push(
      new webpack.optimize.OccurrenceOrderPlugin()
      // new webpack.HotModuleReplacementPlugin()
    );
	}else {
		plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.DedupePlugin()
		);
  }

  return {
    entry: entries,
    output: {
      path: path.resolve(develop ? rootDir.build : rootDir.production),
      publicPath: develop ? 'http://localhost:' + port.develop + '/__build/' : publicPath,
      filename: develop ? 'js/[name].js' : 'js/[hash:8].[name].min.js',
      chunkFilename: develop ? 'js/[name].chunk.js' : 'js/[chunkhash:8].[name].chunk.min.js'
    },
    resolve: {
      root: [process.cwd() + rootDir.develop, process.cwd() + '/node_modules'],
      alias: {
        global: path.resolve(__dirname, "./src/js/global"),
        // js: path.join(__dirname, "__build/js/"),
        // src: path.join(__dirname, "src/scripts"),
        // styles: path.join(__dirname, "src/styles"),
        // img: path.join(__dirname, "src/img")
      },
      extensions: ['', '.js', '.css', '.json', '.html']
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
        {test: /\.js[x]?$/, exclude: path.join(__dirname, '/node_modules/'), loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']},
        {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
        {test: /\.(png|jpg|jpeg|gif|svg)$/, loaders: [
          'url-loader?limit=10000&name=/img/[hash:8].[name].[ext]',
          'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ]},
        {test: /\.json/, loader: 'json-loader'},
        {test: /\.(html|htm)/, loader: 'html-loader'}
      ]
    },
    postcss: function(){
      return [require('autoprefixer'), require('precss'), require('postcss-nested'), require('postcss-mixins')];
    },
    plugins: plugins,
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    }
  };
};
