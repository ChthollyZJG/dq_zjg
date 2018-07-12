const express = require('express')
const app = express()
const path = require('path')

// express托管静态文件(就是自动加载css,js等文件)
app.use(express.static(path.join(__dirname, './statics')))

// 这里用路由的思想,将这里进行模块化
// 那么将这里进行路油化之后, 将其引入即可
app.use('/account', require(path.join(__dirname, './routers/accountRouter.js')))

app.listen(6699, '127.0.0.1', err => {
    if(err) {
        console.log(err);
    }
    console.log('start OK');
})

/**
 * 2018-7-12 20:08:53
 * 今日项目总结:
 *      1. 插件:    express(路由)
 *                  path
 *                  captchapng(图片验证码生成包)
 *      2. 用法:(需要熟练)
 *          express的用法:
 *              const express = require('express)
 *              // app是express对象的一个实例,主体结构都是靠app来实现的
 *              const app = express()
 *              
 *              app.get('路径', (req,res)=> {})
 *              app.post('路径', (req,res)=> {})
 *              但是如果使用路由的话,这里需要将app.get/post写进路由中,这边则需要引入路由模块,并使用
 *              即 app.use('路径', 引入的路由文件)
 * 
 *              最后,依旧是listen方法开启web服务
 *              app.listen(xxx,'127.0.0.1', err=> {console.log(xxx)})
 * 
 *      3. 对于路由的使用,  路由.js文件中也需要引入 express模块
 *          引入之后,
 *              // 创建路由对象(相当于app.js中的app一样,其余功能都是用这个实例对象点出来)
                const accountRouter = express.Router()
                将 app.get 换成 accountRouter.get
                其余保持一样
            最后暴露
                module.exports = accountRouter
        4. 而路由的2级分支(控制器)
            利用的模块化原理(其实就我理解,更像小程序中的抽取组件那样,就是将某一段代码抽取出去,写在另一个文件中,然后暴露,本文件引入)
            个人感觉就像是把控制器的对应代码 复制/粘贴 过来一样,个人感觉!!!
 */