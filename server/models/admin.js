const mongoose = require('mongoose')

var dbURI = 'mongodb://localhost:27017/company'
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI
}

mongoose.connect(dbURI)
// mongoose.connect('mongodb://localhost:27017/company')

// 实例化连接对象
const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', callback => {
    console.log('MongoDB连接成功！！')
})
//一个模型
const AdminSchema = new mongoose.Schema({
    account: { type: String }, // 帐号名
    passWd: { type: String }, // 密码
    right: { type: Number } // 权限
})
//创建Model

const AdminModel = mongoose.model('admin', AdminSchema)

module.exports = AdminModel