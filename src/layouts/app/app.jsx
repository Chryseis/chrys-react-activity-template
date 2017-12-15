/**
 * Created by Administrator on 2017/12/10.
 */
import message from '../../components/message'
import './app.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerImg: require('./images/header.jpg'),
            bodyImg: require('./images/img-step1.jpg'),
            footerImg: APP.BROWSER.isclient ? require('./images/footer-app.jpg') : require('./images/footer-wechat.jpg')
        }
    }

    render() {
        const {headerImg, bodyImg, footerImg} = this.state;
        return <div className="app">
            <div className="header">
                <img src={headerImg}/>
                <div className="logo"></div>
            </div>
            <div className="body">
                <img src={bodyImg}/>
            </div>
            <div className="footer">
                <img src={footerImg}/>
                <div className="btn paper"
                     onClick={() => APP.JUMP("https://gift.yingyinglicai.com/activity/hongbao/8820160427000195")}></div>
                <div className="btn share" onClick={() => message.info()}></div>
            </div>
        </div>
    }
}

export default App