const DEFAULT_MESSAGE = 'Sorry, the internet connection failed'
const errorCode = {}
const codeInfoMap = []

/**
 * 定义一个错误码
 * @param {number} code 错误码，必须唯一
 * @param {null | string, optional} message 错误描述，会下发给浏览器端让用户看见。若不填则使用默认值。
 *                                   通过特殊标志${1}或${2}等，配合MError的setMessageTemplateData方法可以嵌入变量
 * @param {boolean, optional} fatal 是否是致命错误，默认为true。致命错误在测试环境会显示大红条提示
 * @return {number}
 */
function defineCode(code, message, fatal) {
    if (codeInfoMap[code]) {
        throw new Error(`duplicated code:${code}`)
    }
    codeInfoMap[code] = {
        message: message || `(${code})${DEFAULT_MESSAGE}`,
        fatal: fatal === undefined || fatal
    }
    return code
}

/**
 * 获取错误码对应的错误信息
 * @param {number} code
 * @returns {{message: string, fatal: boolean}}
 */
errorCode.getCodeData = function getCodeData(code) {
    if (codeInfoMap[code]) {
        return codeInfoMap[code]
    }
    // -20000 ~ -30000 是业务错误，前端不需要知道
    if (code > -20000 || code < -30000) {
        console.error(`Unknown code:${code}`)
    }
    return {
        message: DEFAULT_MESSAGE,
        fatal: true
    }
}

/* eslint-disable no-template-curly-in-string */
/** 无错误 */
errorCode.SUCCESS = defineCode(0, '')

/** 不知名错误 */
errorCode.UNKNOWN = defineCode(1, 'Unknown Error')

/** **********************************以下前端相关的错误码*********************************** */

/** 401未授权 */
errorCode.HTTP_UNAUTHORIZED = defineCode(1001, 'Unauthorized')

/** 前端请求超时 */
errorCode.HTTP_TIME_OUT = defineCode(1002, 'Time out')

/** 403禁止访问 */
errorCode.HTTP_FORBIDDEN = defineCode(1003, 'Forbidden')

/** 404找不到 */
errorCode.HTTP_NOT_FOUND = defineCode(1004, 'Not found')

/** 其它前端请求网络错误 */
errorCode.HTTP_NETWORK_ERR = defineCode(1005, 'Sorry, the internet connection failed.')

/** **********************************以下发包相关的错误码*********************************** */

/** 域名被墙 */
errorCode.HOST_UNRESOLVED = defineCode(2001)

/** 还未连接上 */
errorCode.NOT_CONNECTED = defineCode(2002)

/** 服务器断开连接 */
errorCode.SERVER_CLOSED = defineCode(2003)

/** 发包超时 */
errorCode.TIME_OUT = defineCode(2004, 'Time out')

/** 已达到最大重发次数 */
errorCode.MAX_RETRY = defineCode(2005)

/** 解析包错误 */
errorCode.PARSE_ERROR = defineCode(2006)

/** 无法创建请求包 */
errorCode.PACKET_ERROR = defineCode(2008)

/** 指定的地址在远程机器上不可用 */
errorCode.ADDRESS_NOT_AVAILABLE = defineCode(2009)

/** socket连接尝试超时 */
errorCode.CONNCTION_TIMEDOUT = defineCode(2010)

/** 服务器主动拒绝建立连接 */
errorCode.CONNCTION_REFUSED = defineCode(2011)

/** 连接已被重置 */
errorCode.CONNCTION_RESET = defineCode(2012)

/** 从本机到给定addr的网络不通 */
errorCode.NETWORK_UNREACHABLE = defineCode(2013)

/** socket 已经连接 */
errorCode.IS_CONNECTED = defineCode(2014)

/** 端口号被占用 */
errorCode.ADDRESS_IN_USE = defineCode(2015)

/** socket 发送数据返回错误 */
errorCode.SOCKET_SEND_ERROR = defineCode(2016)

/** 服务器操作数据时返回错误 */
errorCode.SERVER_PROCESSCE_ERROR = defineCode(2018)

/** 服务器返回数据为空 */
errorCode.SERVER_RETURN_EMPTY_DATA = defineCode(2019)

/** 不允许把数据库中查出的数据直接下发到浏览器 */
errorCode.CANNOT_SEND_NATIVE_DATA = defineCode(2020)

/** 请求包过大 */
errorCode.REQUEST_TOO_LARGE = defineCode(2021)

/** 禁止访问该端口 */
errorCode.FORBIDDEN_PORT = defineCode(2022)

/** 被拦截的攻击请求 */
errorCode.HACK_DETECTED = defineCode(2023)

/** 已经回过包了，不能多次回包 */
errorCode.HAS_RESPONSED = defineCode(2024)

/** 服务器端向第三方服务器请求数据时错误 */
errorCode.THIRD_SEVER_ERROR = defineCode(2025)

/** 没有帐号自动注册 */
errorCode.NO_ACCOUNT_AUTO_REGISTER = defineCode(2026)

/** 登录密码错误 */
errorCode.PWD_ERROR = defineCode(2027, '登录密码或账户错误')

/** 沒有对应章节 */
errorCode.NO_CHAPTER_ERROR = defineCode(2028, '没有对应的章节')

/** 已加入书架 */
errorCode.BOOK_EXIST = defineCode(2029, '书架中已有此书籍')

/** 无此帐号，请联系管理员 */
errorCode.NO_ADMIN_ACCOUNT = defineCode(2030, '无此帐号，请联系管理员')

/** 管理员密码错误 */
errorCode.INVAILD_ADMIN_PWD = defineCode(2031, '密码错误')

/** 管理员没有操作权限 */
errorCode.NO_RIGHTS = defineCode(2032, '没有操作权限')

/** **********************************以下是各业务用的错误码*********************************** */

module.exports = errorCode

/** 后端代码crash */
errorCode.SERVER_CRASH = defineCode(-10001)

/** 用户未登录 */
errorCode.NOT_LOGIN = defineCode(-10030)

/** 安全校验未通过 */
errorCode.NOT_SAFE = defineCode(-10034)

/** 参数错误 */
errorCode.PARAMETER_ERROR = defineCode(-10043, 'Parameter error')

/** 扣款失败 */
errorCode.PAY_FAILED = defineCode(-10050)

/** 请求不被允许（POST、GET） */
errorCode.FORBIDDEN = defineCode(-10403)
