const express = require('express')
const path = require('path')
// 创建路由对象
const accountRouter = express.Router()

// 第二点, 一般每个路由都有一个专属的处理控制器, 用来处理函数
accountRouter.get('/login', require(path.join(__dirname, '../controllers/accountCtrl')).getLoginPage)

accountRouter.get('/vcode', require(path.join(__dirname, '../controllers/accountCtrl')).getImageVcode)

module.exports = accountRouter