const userModel = require('../../lib/users_api')
const adminModel = require('../../lib/admin_api')

const md5 = require('md5')

/**
 * 拉取所有用户
 * @return {Array}
 */
exports.allUsers = async () => {
    const result = await userModel.find()
    return {allUsers: result}
}

/**
 * 后台管理员登录
 * @return {Object}
 */
exports.login = async (account, passWd) => {
    const result = await adminModel.findOne({account})
    if (result) {
        // 如果找到已存在的用户
        // 判断密码是否正确
        if (md5(passWd) === result.passWd) {
            return {success: 1}
        } else {
            return Promise.reject(new MError(MError.INVAILD_ADMIN_PWD, '密码错误'))
        }
    } else {
        return Promise.reject(new MError(MError.NO_ADMIN_ACCOUNT, '无此帐号，请联系管理员'))
    }
}

/**
 * 删除用户
 * @return {Object}
 */
exports.removeUser = async (account, email) => {
    const adminAccount = await adminModel.findOne({account})
    const user = await userModel.findOne({email})
    console.log(adminAccount, user)
    if (adminAccount.right) {
        await user.remove({email})
        return {success: 1}
    } else {
        return Promise.reject(new MError(MError.NO_RIGHTS, '没有操作权限'))
    }
}
