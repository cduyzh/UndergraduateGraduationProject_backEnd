const projectConfig = require('../../common/project_config')

/**
 * 服务器端正式环境使用的配置。其它环境需要定义单独的文件覆盖这些配置
 */
let configure = projectConfig

// node监听的端口号。正式环境使用偶数端口号
configure.port = 39130
// 暴露给用户的主机名，使用80端口，通过nginx转发到port端口上
configure.host = `${configure.httpProtocol}//dev.hellobyebye.com`

// 文件编辑器上传图片大小限制，单位B
configure.editor_max_img_upload_size = 10 * 1024 * 1024
// 文件编辑器允许上传的图片格式
configure.editor_allow_img = ['.png', '.jpg', '.jpeg', '.gif', '.bmp']
// 最大请求大小，包括ajax和表单提交，不含上传文件
configure.max_request_size = '1mb'


// 日志配置名字
configure.log4js_category = 'file'

if (!configure.is_server) {
    console.log('加载本地版配置文件')
    // eslint-disable-next-line global-require
    configure = require('./global_local').init(configure);
} else if (configure.dev) {
    console.log('加载服务器测试环境版配置文件')
    // eslint-disable-next-line global-require
    configure = require('./global_server_dev').init(configure);
} else {
    console.log('加载服务器正式环境版配置文件')
    configure = require('./global_server_pro').init(configure);
}

module.exports = configure;