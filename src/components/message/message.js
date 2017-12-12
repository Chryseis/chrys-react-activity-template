/**
 * Created by Administrator on 2017/12/10.
 */
import PropTypes from 'prop-types';
import './message.less'


class Message extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        const {title, content, btnText} = this.props;
        return <div className="message-mask">
            <div className="message-wrapper">
                <div className="header"></div>
                <div className="body"></div>
                <div className="footer"></div>
            </div>
        </div>
    }
}