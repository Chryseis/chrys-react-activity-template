/**
 * Created by Administrator on 2017/11/9.
 */
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 75,
            propList: ['*', '!letter-spacing']
        })
    ]
}