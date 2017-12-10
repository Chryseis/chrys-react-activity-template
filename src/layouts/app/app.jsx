/**
 * Created by Administrator on 2017/12/10.
 */
import './app.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerImg: require('./images/header.jpg'),
            logoImg: "https://ami-img.b0.upaiyun.com/activityNew/Indianamb/common/img-logo.png",
            bodyImg: require('./images/img-step1.jpg'),
            footerImg: APP.BROWSER.isclient ? require('./images/footer-app.jpg') : require('./images/footer-app.jpg')
        }
    }

    render() {
        const {headerImg, logoImg, bodyImg, footerImg} = this.state;
        return <div className="app">
            <div className="header">
                <img src={headerImg}/>
            </div>
            <div className="body">
                <img src={bodyImg}/>
            </div>
            <div className="footer">
                <img src={footerImg}/>
            </div>
        </div>
    }
}

export default App