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

// 拉取所有用户
router.get('/all_users', async (req, res, next) => {
    manager.getAllusers().thenSend(req, res, next)
})

// 后台管理员登录
router.post('/admin_login', async (req, res, next) => {
    const result = req.body
    const account = result.account
    const passWd = result.passWd
    manager.adminLogin(account, passWd).thenSend(req, res, next)
})

// 删除用户
router.post('/remove_user', async (req, res, next) => {
    const result = req.body
    const account = result.account
    const email = result.email
    manager.removeUser(account, email).thenSend(req, res, next)
})
