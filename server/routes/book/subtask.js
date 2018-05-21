const userModel = require('../../lib/users_api')
const carouseModel = require('../../lib/carouse_api')
const hotBookModel = require('../../lib/hot_book_api')
const specialRecommentModel = require('../../lib/special_recomment_api')
const womanLoveModel = require('../../lib/woman_love_api')
const manLoveModel = require('../../lib/man_love_api')
const bookInfoModel = require('../../lib/book_info_api')

const md5 = require('md5')

/**
 * 检查密钥是否正确
 * @param {string} secret
 */
exports.checkSecret = secret => {
    // 测试环境不用验证
    if (!gConfig.dev && secret !== 'wegrth') {
        return Promise.reject(new MError(MError.PARAMETER_ERROR, 'Oops!'))
    }
    return Promise.resolve()
}

/**
 * 创建一个随机值
 * @return {number}
 */
exports.createRandomId = async (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 登录和注册
 * @param {string} email
 * @param {string} passWd
 * @return {number} uin
 */
exports.userLogin = async (email, passWd) => {
    const result = await userModel.findOne({email})
    const userObj = {
        email,
        passWd
    }
    console.log(result)

    if (result) {
        // 如果找到已存在的用户
        // 判断密码是否正确
        if (md5(passWd) === result.passWd) {
            return {uin: result['_id'], assetCoin: result.assetCoin, assetChapter: result.assetChapter}
        } else {
            return Promise.reject(new MError(MError.PWD_ERROR, '密码错误'))
        }
    } else {
        // 未注册的用户
        // 自动创建一个账户并抛出异常
        console.log(userObj)
        const newUser = await userModel.create(userObj)
        return {uin: newUser['_id'], assetCoin: newUser.assetCoin, assetChapter: newUser.assetChapter}
        // 抛出异常处理
        // return Promise.reject(new MError(MError.NO_ACCOUNT_AUTO_REGISTER, '该邮箱未注册'))
    }
}

/**
 * 获取用户书架内容
 * @param {string} email
 * @return {Array}
 */
exports.userBookShelf = async email => {
    const result = await userModel.findOne({email})
    return {bookShelfList: result.bookShelf}
}

/**
 * 获取首页展示信息的内容
 * @return {Array}
 */
exports.homeInfo = async () => {
    // return {title: carouse['ad_name'], data: carouse.data}
    const carouse = await carouseModel.findOne()
    // console.log('carouse', carouse)
    const hotBook = await hotBookModel.findOne()
    // console.log('hotBook', hotBook)
    const specialRecomment = await specialRecommentModel.findOne()
    // console.log('specialRecomment', specialRecomment)
    const womanLove = await womanLoveModel.findOne()
    // console.log('womanLove', womanLove)
    const manLove = await manLoveModel.findOne()
    // console.log('manLove', manLove)
    return {items: [carouse, hotBook, specialRecomment, womanLove, manLove]}
}

/**
 * 获取书本介绍
 * @return {Object}
 */
exports.bookInfo = async bookId => {
    const bookinfo = await bookInfoModel.findOne({'item.fiction_id': bookId})
    return {
        author_books: bookinfo.author_books,
        item: bookinfo.item
    }
}

/**
 * 获取章节目录
 * @return {Object}
 */
exports.chapters = async bookId => {
    const bookinfo = await bookInfoModel.findOne({'item.fiction_id': bookId})
    return {
        chapters: bookinfo.item.categories,
        title: bookinfo.item.title
    }
}

/**
 * 获取章节详情内容
 * @return {Object}
 */
exports.chaptersDetails = async (bookId, chapterId) => {
    const bookinfo = await bookInfoModel.findOne({'item.fiction_id': bookId})
    console.log(bookinfo.item.details[chapterId])
    if (bookinfo.item.details[chapterId]) {
        return {t: bookinfo.item.details[chapterId].t || '', p: bookinfo.item.details[chapterId].p || ''}
    } else {
        return Promise.reject(new MError(MError.NO_CHAPTER_ERROR, '没有对应的章节'))
    }
}

/**
 * 加入书架
 * @return {Object}
 */
exports.updateBookShelf = async (bookId, email) => {
    const bookInfo = await bookInfoModel.findOne({'item.fiction_id': bookId})
    const bookInfoObj = {
        fiction_id: bookInfo.item.fiction_id,
        cover: bookInfo.item.cover,
        title: bookInfo.item.title,
        authors: bookInfo.item.authors,
        latest: bookInfo.item.latest
    }
    const user = await userModel.findOne({email})
    const bookExist = user.bookShelf.find(element => {
        return element.fiction_id === bookId
    })
    if (bookExist) {
        return Promise.reject(new MError(MError.BOOK_EXIST, '书架中已有此书籍'))
    } else {
        // 修改对象
        // const res = user.bookShelf.push(bookInfoObj)
        // userModel.update({email}, {$set: {bookShelf: res}})
        // 修改数组
        userModel.update({email}, {$addToSet: {bookShelf: bookInfoObj}})
    }
    return {
        item: 0
    }
}
