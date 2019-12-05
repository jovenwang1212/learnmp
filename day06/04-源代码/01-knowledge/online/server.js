// 导入http模块:
var http = require('http');
var fs = require('fs');
// 创建http server，并传入回调函数:
var server = http.createServer(function(request, response) {
    var url = request.url;
    console.log(url);
    if (url === '/checkLogin') {
        setTimeout(function() {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(
                JSON.stringify({
                    isLogin:true
                })
            );
        }, 3000);
    }
    if (url === '/isVip') {
        setTimeout(function() {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(
                JSON.stringify({
                    isLogin:false
                })
            );
        }, 3000);
    }
    if (url === '/') {
        fs.readFile('./index.html', function(err, data) {
            if (!err) {
                response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
                response.end(data);
            } else {
                throw err;
            }
        });
    }
    if (url === '/main.js') {
        fs.readFile('./main.js', function(err, data) {
            if (!err) {
                response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
                response.end(data);
            } else {
                throw err;
            }
        });
    }
});

// 让服务器监听8080端口:
server.listen(10086);

console.log('Server is running at http://localhost:10086/');
