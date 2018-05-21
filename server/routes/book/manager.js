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

/**
 * 登录和注册
 * @param {string} email
 * @param {string} passWd
 */
exports.login = (email, passWd) => {
    const result = subtask.userLogin(email, passWd)
    return result
}
/**
 * 获取用户书架内容
 * @param {string} uin
 */
exports.getBookshelfList = email => {
    const result = subtask.userBookShelf(email)
    return result
}

/**
 * 获取首页展示信息的内容
 */
exports.getHomeInfo = () => {
    const result = subtask.homeInfo()
    return result
}

/**
 * 获取书本介绍
 * @param {string} bookId
 */
exports.getBookInfo = bookId => {
    const result = subtask.bookInfo(bookId)
    return result
}

/**
 * 获取章节目录
 * @param {string} bookId
 */
exports.getChapters = bookId => {
    const result = subtask.chapters(bookId)
    return result
}

/**
 * 获取章节详情内容
 * @param {string} bookId
 * @param {string} chapterId
 */
exports.getChaptersDetails = (bookId, chapterId) => {
    const result = subtask.chaptersDetails(bookId, chapterId)
    return result
}

/**
 * 加入书架
 * @param {string} bookId
 * @param {string} email
 */
exports.addBookShelf = (bookId, email) => {
    const result = subtask.updateBookShelf(bookId, email)
    return result
}
