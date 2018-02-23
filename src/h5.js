/**
 * Created by Administrator on 2017/12/10.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/app/app';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


window.wx = require('../libs/weixin-1.0.0');
window.APP = require('../libs/APP');
window.Share = require('../libs/share');


let div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(<App />, div);