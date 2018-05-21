const db = connect('company') //链接数据库

const admin = {
    account: 'yzh',
    passWd: 'fddd873572cfb78c64d5d17918bc3c6d', // 518855
    right: 0
}

const superAdmin = {
    account: 'admin',
    passWd: '7d0e46c798dbf60fada6a69605c65847', // az518855
    right: 1
}

const adminArray = [admin, superAdmin]
db.admins.insert(adminArray)
