exports.init = function init(configure) {
    // node监听的端口号。测式环境使用奇数端口号
    configure.port++
    // 暴露给用户的主机名，使用80端口，通过nginx转发到port端口上
    configure.host = `${configure.httpProtocol}//dev.hellobyebye.com`

    // 日志配置名字
    configure.log4js_category = 'file'

    return configure;
}
