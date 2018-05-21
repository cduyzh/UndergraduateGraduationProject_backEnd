const mongoose = require('mongoose')

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
const HotBookSchema = new mongoose.Schema({
    ad_name: { type: String, default: 'yzh' }, // 标题
    data: { type: Object } // 数组对象
})
//创建Model

const HotBookModel = mongoose.model('hotBook', HotBookSchema)

module.exports = HotBookModel