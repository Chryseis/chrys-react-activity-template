/**
 * Created by Administrator on 2017/12/10.
 */
import PropTypes from 'prop-types';
import './message.less'


class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    static propsType = {
        title: PropTypes.string,
        content: PropTypes.string,
        btnText: PropTypes.string
    }

    static defaultProps = {
        title: '温馨提示',
        content: '请使用浏览器自带的分享功能，分享给您的好友',
        btnText: '确定'
    }

    info = () => {

    }

    render() {
        const {title, content, btnText} = this.props;
        const {visible} = this.state;
        return <div className="message-mask" style={{display: visible ? 'block' : 'none'}}>
            <div className="message-wrapper">
                <div className="header">{title}</div>
                <div className="body">{content}</div>
                <div className="footer">{btnText}</div>
            </div>
        </div>
    }
}

Message.newInstance = function () {
    let div = document.createElement('div');
    document.body.appendChild(div);

    const message = ReactDOM.render(<Message/>, div);
    return {
        info(content){
            message.info(content);
        },
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    }
}
export default Message;