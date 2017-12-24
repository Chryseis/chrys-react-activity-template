/**
 * Created by Administrator on 2017/12/10.
 */
import createContainer from '../../common/js/createContainer';
import  {Transition} from 'react-transition-group';
import './modal.less';

@createContainer
class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {visible} = this.props;
        return <Transition in={visible} timeout={500} appear unmountOnExit>
            {
                status =>
                    <div className={`modal-mask ${status}`}>
                        <div className="wrapper">
                            {this.props.children}
                        </div>
                    </div>
            }
        </Transition>
    }
}

export default Modal;