const envHostName = process.env.HOST_NAME

exports.init = function init(configure) {
    // 是否是测试环境
    configure.dev = true

    // 当前开发者的名字
    configure.developer = process.env.USER || process.env.USERNAME || process.env.COMPUTERNAME

    // 日志配置名字
    configure.log4js_category = 'codeLine'

    const hostName = envHostName || `${configure.httpProtocol}//localhost`
    configure.host = `${hostName}:${configure.port}`

    return configure;
}