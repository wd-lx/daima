let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => {
    //给用户模拟一个id
    var userid = parseInt(Math.random() * 89999) + 10000;
    console.log("欢迎id为" + userid + "的用户");
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })
    fs.readFile('./home.html', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(userid + "用户读取完毕");
        res.end(data);
    })

    res.end();
})
console.log('B');
server.listen(4000, '192.168.1.102');