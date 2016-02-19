var path = require('path');
var webpack = require('webpack');

// 压缩react
// new webpack.DefinePlugin({
//   "process.env": {
//     NODE_ENV: JSON.stringify("production")
//   }
// });

module.exports = {
  entry: path.join(__dirname, 'src/js/main.js'),
  output: {
    path: path.join(__dirname, 'src/js'),
    publicPath: 'js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.json']
  },
  module: {
    loaders: [
      {test: /\.js[x]?$/, exclude: path.join(__dirname, '/node_modules/'), loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
      {test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=10000&name=/img/[hash:8].[name].[ext]'},
      {test: /\.json/, loader: 'json-loader'}
    ]
  },
  postcss: function(){
    return [require('autoprefixer'), require('precss'), require('postcss-nested'), require('postcss-mixins')];
  },
  plugins: []
}
