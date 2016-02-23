var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin= require('copy-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var config = require('./config');
var port = config.port;
var rootDir = config.rootDir;

module.exports = function(options) {
  var develop = 'true';
  var plugins = [
    // new ExtractTextPlugin("[name].css")
  ];
  if(options) {
    develop = options.node_env !== 'production';
    if(develop) {
      plugins.push(
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify("development"),
          '__DEV__': true
        }),
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      );
  	}else {
  		plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
  			new webpack.DefinePlugin({
  				"process.env": {
  					NODE_ENV: JSON.stringify("production")
  				}
  			}),
  			new webpack.NoErrorsPlugin(),
        new AssetsPlugin({
          filename: 'assetsMap.json',
          path: path.join(__dirname, rootDir.develop, '__build'),
          prettyPrint: true,
          update: true,
          processOutput: function(assets) {
            return 'window.staticAssetsMap = ' + JSON.stringify(assets);
          }
        }),
        //把指定文件夹下的文件复制到指定的目录
        new CopyPlugin([
          {from: rootDir.develop + '/index.html'},
          {from: rootDir.develop + '/tmpl'},
          {from: rootDir.develop + '/__build/assetsMap.json', to: '__build'}
        ])
  		);
    }
  }

  return {
    entry: [
      'webpack-hot-middleware/client',
      path.join(__dirname, rootDir.develop, '/js/main')
    ],
    output: {
      path: path.resolve(develop ? rootDir.develop + '/__build/' : rootDir.production),
      publicPath: develop ? 'http://localhost:' + port.develop + '/__build' : '',
      filename: develop ? 'js/bundle.js' : 'js/[chunkhash:8].bundle.min.js'
    },
    resolve: {
      root: [process.cwd() + rootDir.develop, process.cwd() + '/node_modules'],
      alias: {
        // js: path.join(__dirname, "__build/js/"),
        // src: path.join(__dirname, "src/scripts"),
        // styles: path.join(__dirname, "src/styles"),
        // img: path.join(__dirname, "src/img")
      },
      extensions: ['', '.js', '.css', '.json']
    },
    module: {
      loaders: [
        {test: /\.js[x]?$/, exclude: path.join(__dirname, '/node_modules/'), loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']},
        {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
        {test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=10000&name=/img/[hash:8].[name].[ext]'},
        {test: /\.json/, loader: 'json-loader'},
        {test: /\.(html|htm)/, loader: 'html-loader'}
      ]
    },
    postcss: function(){
      return [require('autoprefixer'), require('precss'), require('postcss-nested'), require('postcss-mixins')];
    },
    plugins: plugins,
    devServer: {
      stats: {
        cached: false
      }
    }
  };
};
