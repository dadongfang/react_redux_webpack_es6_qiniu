var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferPlugin= require('transfer-webpack-plugin');
var config = require('./config');

module.exports = function(options) {
  var debug = 'true';
  var plugins = [
    // new ExtractTextPlugin("[name].css")
    //把指定文件夹下的文件复制到指定的目录
    new TransferPlugin([
      {from: 'src'}
    ])
  ];
  if(options) {
    debug = options.node_env !== 'production';
    if(!debug) {
  		plugins.push(
  			new webpack.DefinePlugin({
  				"process.env": {
  					NODE_ENV: JSON.stringify("production")
  				}
  			}),
  			new webpack.NoErrorsPlugin()
  		);
  	}else {
      plugins.push(
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify("development"),
          '__DEV__': true
        })
      );
    }
  }

  return {
    entry: path.join(__dirname, '/src/js/main.js'),
    output: {
      path: path.resolve(debug ? '__build' : 'production'),
      filename: debug ? 'js/bundle.js' : 'js/[chunkhash:8].bundle.min.js',
      publicPath: debug ? 'http://localhost:3005/__build' : 'http://localhost:3005/production'
    },
    resolve: {
      root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
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
