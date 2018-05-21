const path = require('path')

/**
 * 服务器端正式环境使用的配置。其它环境需要定义单独的文件覆盖这些配置
 */
const configure = {}

// 工程名字
configure.projectName = 'yzh_node_server'
// 工程根目录
configure.project_dir = path.normalize(`${__dirname}/..`)

// 请求协议，可改为https
configure.httpProtocol = 'https:'

// 服务器端环境
configure.is_server = process.env.NODE_ENV === 'production'
// 是否是测试环境，包括本地和线上的
configure.dev = !process.env.NODE_ENV || process.env.DEV_SERVER

// 安全起见，各关键账号密码不托管在git上，直接保存在server_config.js文件中
try {
    // eslint-disable-next-line
    configure.serverConfig = require(`${configure.project_dir}/server_config`)
} catch (e) {
    console.warn('没有找到server_config.js文件')
    configure.serverConfig = {}
}

// 后端用的数据和资源目录
configure.data_dir = path.join(configure.project_dir, 'server', 'data')
// 生成文件的临时目录
configure.TMP_DIR = path.join(configure.data_dir, 'tmp')
// 上传时的临时目录
configure.UPLOAD_TMP_DIR = path.join(configure.data_dir, 'uploadtmp')
// 使用文件储存session时的存放目录
configure.SESSION_DIR = path.join(configure.data_dir, 'sessions')
// FAQ列表文件的存放路径
configure.FAQ_LIST_PATH = path.join(configure.data_dir, 'faqlist.json')

module.exports = configure