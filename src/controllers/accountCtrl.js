const path = require("path")
const captchapng = require('captchapng')
// 这里是一个函数, emmm最好是按照老师的, 搞一个变量赋值
// module.exports = (req, res) => {
//     res.send('hellow')
// }
module.exports.getLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../view/login.html"));
};

module.exports.getImageVcode = (req, res) => {
    // 保存生成的随机数
    const Num = parseInt(Math.random() * 9000 + 1000)
    var p = new captchapng(80, 30, Num); // width,height,numeric captcha
    p.color(0, 0, 0, 0)    // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255)   // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64()
    var imgbase64 = new Buffer(img, "base64")
    res.writeHead(200, {
        "Content-Type": "image/png"
    });
    res.end(imgbase64)
};
