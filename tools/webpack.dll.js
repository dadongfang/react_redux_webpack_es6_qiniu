const webpack = require('webpack')
const path = require('path')
const vendors = [
    'webpack-zepto',
    'react',
    'react-dom',
    'react-router-dom',
    'react-router-config',
    'react-redux',
    'react-loadable',
    'redux',
    'redux-thunk',
    'redux-logger',
    'antd',
    'lodash',
    'moment'
]

module.exports = {
     output: {
        path: path.resolve(__dirname, '../src/js'),
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        "lib": vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, './manifest.json'),
            name: '[name]',
            context: __dirname
        }),
    ]
}
