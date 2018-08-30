/**
 * Created by Administrator on 2017/12/10.
 */
import React from 'react'
import message from '../../components/message';
import Modal from '../../components/modal';
import './app.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerImg: require('./images/header.jpg'),
            bodyImg: require('./images/img-step1.jpg'),
            footerImg: APP.BROWSER.isclient ? require('./images/footer-app.jpg') : require('./images/footer-wechat.jpg'),
            visible: false
        }
    }

    render() {
        const {headerImg, bodyImg, footerImg, visible} = this.state;
        return <div className="app">
            <div className="header">
                haha
                <img src={headerImg}/>
                <div className="logo"></div>
            </div>
            <div className="body">
                <img src={bodyImg}/>
            </div>
            <div className="footer">
                <img src={footerImg}/>
                <div className="btn rules" onClick={() => this.setState({visible: true})}></div>
                <div className="btn paper"
                     onClick={() => APP.JUMP("https://gift.fuckyourmother.com/activity/hongbao/8820160427000195")}></div>
                <div className="btn share" onClick={() => message.info()}></div>
            </div>
            <Modal visible={visible}>
                <div className="rules-wrapper" onTouchTap={() => this.setState({visible: false})}>haha123</div>
            </Modal>
        </div>
    }
}

export default App