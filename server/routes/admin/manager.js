const subtask = require('./subtask')

/**
 * 测试get
 */
exports.test = async () => {
    // return {uin: 1}
    // const result = await userModel.create(user)
    // return {uin: result['_id']}
    // 抛出异常处理
    return Promise.reject(new MError(MError.NO_ACCOUNT_AUTO_REGISTER, '该邮箱未注册'))
}

/**
 * 测试post
 * @param {string} min
 * @param {string} max
 */
exports.testPost = (min, max) => {
    const result = subtask.createRandomId(min, max)
    return result
}

// 拉取所有用户
exports.getAllusers = async () => {
    const result = subtask.allUsers()
    return result
}

// 后台管理员登录
exports.adminLogin = async (account, passWd) => {
    const result = subtask.login(account, passWd)
    return result
}

// 删除用户
exports.removeUser = async (account, email) => {
    const result = subtask.removeUser(account, email)
    return result
}
