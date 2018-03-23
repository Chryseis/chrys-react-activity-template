/**
 * Created by Administrator on 2017/12/10.
 */
const path = require('path')
const os = require("os")


/**
 * 获取本机ip地址
 */
exports.ip = getIp()


function getIp() {
    var ip = "127.0.0.1";

    console.log(os.networkInterfaces())

    for(var i=0;i<os.networkInterfaces().en0.length;i++){
        if(os.networkInterfaces().en0[i].family=='IPv4'){
            ip=os.networkInterfaces().en0[i].address;
        }
    }
    return ip
}