const mongoose = require('mongoose')

var dbURI = 'mongodb://localhost:27017/company'
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);

// mongoose.connect('mongodb://localhost:27017/company')

// 实例化连接对象
const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', callback => {
    console.log('MongoDB 图书信息集合连接成功！！')
})
//一个模型
const BookInfoSchema = new mongoose.Schema({
    author_books: { type: Array, default: 'yzh' }, // 作者其他图书数组
    item: { type: Object } // 图书详情数组对象
})
//创建Model

const BookInfoModel = mongoose.model('bookinfo', BookInfoSchema)

module.exports = BookInfoModel