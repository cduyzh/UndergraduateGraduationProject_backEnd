const mongoose = require('mongoose')
const CONST = require('../routes/book/const')

// mongoose.connect('mongodb://localhost:27017/company')
var dbURI = 'mongodb://localhost:27017/company'
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI
}
mongoose.connect(dbURI)
// 实例化连接对象
const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', callback => {
    console.log('MongoDB连接成功！！')
})
//一个模型
const UserSchema = new mongoose.Schema({
    userName: { type: String, default: 'yzh' },
    bookShelf: { type: Array, default: CONST.BOOKSHELF_LIST }, // 书架内容
    passWd: { type: String },
    email: { type: String },
    time: { type: Date, default: Date.now },
    assetChapter: { type: Number, default: 1 }, // 章节券
    assetCoin: { type: String, default: 100 } // 金币
})
//创建Model

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel