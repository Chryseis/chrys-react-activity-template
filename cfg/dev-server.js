const Koa = require('koa');
const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');
const open = require('opn');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.conf');
const {ip} = require('./utils');

const app = new Koa();
const compiler = webpack(webpackConfig);

app.use(require('koa-connect-history-api-fallback')());

app.use(devMiddleware(compiler, {
    publicPath: '/',
    noInfo: true
}))

//hot reload
app.use(hotMiddleware(compiler, {}))

app.listen(3000, () => {
    console.log('app listening 3000');
    open(`http://${ip}:3000`);
})