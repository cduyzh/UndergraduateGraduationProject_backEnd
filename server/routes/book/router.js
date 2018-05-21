const manager = require('./manager')

/**
 * Created by Carlos on 2017/1/19.
 */
const express = require('express')
const router = express.Router()

exports.router = router

// get测试
router.get('/test', async (req, res, next) => {
    manager.test().thenSend(req, res, next)
})

// post测试
router.post('/test/post', (req, res, next) => {
    const result = req.body
    console.log(result)
    const min = result.min - 0
    const max = result.max - 0
    manager.testPost(min, max).thenSend(req, res, next)
})

// 登录注册
router.post('/login', (req, res, next) => {
    const result = req.body
    const email = result.email
    const passWd = result.passWd
    manager.login(email, passWd).thenSend(req, res, next)
})

// 获取用户书架内容
router.post('/bookshelf_list', (req, res, next) => {
    const result = req.body
    const email = result.email
    manager.getBookshelfList(email).thenSend(req, res, next)
})

// 加入书架
router.post('/add_bookshelf', (req, res, next) => {
    const result = req.body
    const bookId = Number(result.bookId)
    const email = result.email
    manager.addBookShelf(bookId, email).thenSend(req, res, next)
})

// 获取首页展示信息的内容
router.get('/home', (req, res, next) => {
    manager.getHomeInfo().thenSend(req, res, next)
})

// 获取书本介绍
router.post('/current_book_info', (req, res, next) => {
    const result = req.body
    const bookId = Number(result.bookId)
    manager.getBookInfo(bookId).thenSend(req, res, next)
})

// 获取章节目录
router.post('/chapters', (req, res, next) => {
    const result = req.body
    const bookId = Number(result.bookId)
    manager.getChapters(bookId).thenSend(req, res, next)
})

// 获取章节详情内容
router.post('/currentdetail', (req, res, next) => {
    const result = req.body
    const bookId = Number(result.bookId)
    const chapterId = Number(result.chapterId)
    manager.getChaptersDetails(bookId, chapterId).thenSend(req, res, next)
})
