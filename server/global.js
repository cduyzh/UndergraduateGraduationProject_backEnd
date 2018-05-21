/**
 * 在此声明全局变量
 */
const path = require('path');
const P = require('bluebird');

// 请求处理结束时用的方法，将数据封装成标准对象，并下发到浏览器
P.prototype.thenSend = thenSend
// 请求处理结束时用的方法，将数据封装成标准对象，并下发到浏览器。async使用的是原生Promise对象，所以这里需要对原生对象也进行改造
Promise.prototype.thenSend = thenSend
// 替换全局Promise
global.Promise = P;

// 向前端返回数据时用的异常类
global.MError = require('./utils/merror');

global.gConfig = require('./config/global');

// 把要返回给网页端的数据封装成标准的格式
global.gWrapPromiseResult = function gWrapPromiseResult(result) {
    if (result && (result._id || result.length && result[0]._id)) {
        throw new MError(MError.CANNOT_SEND_NATIVE_DATA, '没有转换格式的数据库记录不能下发到浏览器！');
    }
    return {
        data: result,
        status: {
            code: 0
        }
    };
};

// 请求处理结束时用的方法，将数据封装成标准对象，并下发到浏览器
function thenSend(req, res, next) {
    return this.then(gWrapPromiseResult)
        .then((result) => {
            if (gConfig.dev) {
                console.log('send', JSON.stringify(result));
            }
            return result
        })
        .then(res.send.bind(res))
        .catch(next);
}

/**
 * 通用检查参数是否存在方法
 * @param {object} paramsObj
 * @returns {Promise}
 */
global.checkParamsExist = function checkParamsExist(paramsObj) {
    const errMsg = Object.entries(paramsObj)
        .filter(([, value]) => !value || typeof value === 'undefined' || value === 'undefined')
        .map(([key, value]) => `${key}=${value}`)
        .join(', ')
    if (errMsg) {
        return Promise.reject(new MError(MError.PARAMETER_ERROR, `参数${errMsg}`));
    }
    return Promise.resolve();
}

// 可通过console.log(__line)的形式获得当前代码行号字符串
Object.defineProperty(global, '__line', {
    get() {
        const pos = gGetCodePosition(1);
        return pos ? pos.line : '';
    }
});

const rootPath = `${path.sep}server`;
const rootPathIndex = __dirname.lastIndexOf(rootPath) + 1;
// 获得当前代码位置信息
global.gGetCodePosition = function gGetCodePosition(logStackDepth) {
    // Extract caller:
    const stack = new Error().stack;
    const callMsg = stack.split('\n')[logStackDepth + 2];
    if (callMsg) {
        const m = callMsg.match(/^\s+at\s*(.*?)\s+\(?([^ ]+?):(\d+):\d+\)?$/);
        if (m && m.length === 4) {
            const nodeExportsPathIndex = m[1].lastIndexOf('.exports.');
            if (nodeExportsPathIndex >= 0) {
                m[1] = m[1].substr(nodeExportsPathIndex + '.exports.'.length);
            }
            return {
                file: m[2].substr(rootPathIndex),
                line: m[3],
                method: m[1] ? m[1].replace(/^.*\[as ([^\]]+)].*$/, '$1').replace(/.+\.<anonymous>/, '') : ''
            }
        }
    }
    return {file: '', line: '', method: ''};
}

/**
 * 将查询参数转换为字符串，如果传了两个参数，可自动进行拼接
 * @param {string|object} url 待拼接的url。拼接时会检测其中是否已含有问号
 * @param {object} [paramsObj] 对象形式的查询参数。其中的undefined属性会被过滤掉
 * @returns {string} 拼接好的url。若没填url参数则返回字符形式的查询参数
 */
global.gStringifyUrlParams = function gStringifyUrlParams(url, paramsObj) {
    if (paramsObj === undefined) {
        // 只传了一个参数的情况
        paramsObj = url;
        url = undefined;
    }
    const pairs = [];
    for (const key in paramsObj) {
        if (paramsObj.hasOwnProperty(key) && paramsObj[key] !== undefined && paramsObj[key] !== null) {
            pairs.push(`${key}=${paramsObj[key]}`);
        }
    }
    const query = pairs.join('&');
    if (!url) {
        return query;
    }
    return url.includes('?') ? (`${url}&${query}`) : (`${url}?${query}`);
}
