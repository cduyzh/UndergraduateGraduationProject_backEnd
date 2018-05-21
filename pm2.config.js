// 这里没有传dev参数，所以加载不到global_server_dev的
const gConfig = require('./server/config/global');

module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    // 本地不用pm2运行是因为不方便看日志。pm2 logs一旦有更新就会自动滚动到最底部。点error也不能跳转
    apps: [{
        // 正式环境运行配置。name需要与当前所在目录名一致
        name: `${gConfig.projectName}_api`,
        script: 'server/app.js',
        env: {
            NODE_ENV: 'production'
        },
    }, {
        // 测试环境运行配置。name需要与当前所在目录名一致
        name: `${gConfig.projectName}_dev_api`,
        script: 'server/app.js',
        env: {
            NODE_ENV: 'production',
            DEV_SERVER: 'true'
        },
    }],
}
