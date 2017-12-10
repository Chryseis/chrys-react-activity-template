/**
 * Created by Administrator on 2017/12/10.
 */
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const {ip} = require('./utils');


module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    devServer: {
        host: ip,
        port: 8088,
        contentBase: path.resolve(__dirname, '../'),
        compress: true,
        historyApiFallback: true,
        setup(app){
            //todo api
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM": "react-dom"
        })
    ]
})