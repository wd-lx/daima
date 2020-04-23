let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => {
    fs.mkdir('./test/' + unescape);
    res.end('success');
})
console.log('B');
server.listen(4000, '192.168.1.102');