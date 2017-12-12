/**
 * Created by Administrator on 2017/12/13.
 */
import Message from './message';

let messageInstance;

const getInstance = () => {
    if (!messageInstance) {
        messageInstance = Message.newInstance();
    }
    return messageInstance;
}

const info = (content) => {
    let instance = getInstance();
    instance.info(content);
}