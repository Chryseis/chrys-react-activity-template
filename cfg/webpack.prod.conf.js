/**
 * Created by Administrator on 2017/12/10.
 */
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, '../dist/1.0.1'),
        publicPath: '/',
        filename: 'static/js/[name].js',
        sourceMapFilename: '[file].map'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            "React":"react",
            "ReactDOM":"react-dom"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'../template/index.html'),
            chunks: [`app`]
        }),
        new HtmlWebpackPlugin({
            filename: 'web.html',
            template: path.resolve(__dirname,'../template/web.html'),
            chunks: [`web`]
        })
    ]
})