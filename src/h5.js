/**
 * Created by Administrator on 2017/12/10.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/app/app';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


//弹框禁止背景滚动
window.ModalHelper = (function (bodyCls) {
    let scrollTop;
    return {
        afterOpen: function () {
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            document.body.classList.add(bodyCls);
            document.body.style.top = -scrollTop + 'px';
        },
        beforeClose: function () {
            document.body.classList.remove(bodyCls);
            // scrollTop lost after set position:fixed, restore it back.
            if (scrollTop > 0) {
                document.documentElement.scrollTop = scrollTop;
                document.body.scrollTop = scrollTop;
                //window.scrollTo(0,scrollTop)
            }
        }
    };
})('modal-open');

let div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(<App />, div);