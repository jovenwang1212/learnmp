var http = require("http");
var fs = require("fs");
var url = require("url");
var etag = require("etag");
var fresh = require("fresh");

http
  .createServer(function(req, res) {
    // 是不是html文件
    let isHtml = false
    // 是不是浏览器缓存是不是最新的
    let isFresh = false

    var pathname = url.parse(req.url).pathname;
    // 默认加载根目录下的index.html
    if (pathname === "/" || pathname === "/index.html") {
      pathname = "/index.html";
      isHtml = true;
    }

    var fsPath = __dirname + pathname;
    fs.access(fsPath, fs.constants.R_OK, function(err) {
      //fs.constants.R_OK - path 文件可被调用进程读取
      if (err) {
        // 文件不存在，服务器返回404
        res.writeHead(404, "not found");
        res.end("<h1>404 Not Found</h1>");
      } else {
        var stat = fs.statSync(fsPath); //文件信息
        if (isHtml) {
          // html文件使用协商缓存
          var date = stat.mtime;//文件修改时间
          var bjDate = new Date(date.getTime()-date.getTimezoneOffset()*60*1000);
          const lastModified = bjDate.toUTCString() //转化为北京时间
          // etag是文件的唯一标识
          const fileEtag = etag(stat);
          res.setHeader("Cache-Control", "public, max-age=0");
          res.setHeader("Last-Modified", lastModified);
          res.setHeader("ETag", fileEtag);

          // 根据请求头判断缓存是否是最新的
          //if-modified-since If-None-Match
          isFresh = fresh(req.headers, {
            etag: fileEtag,
            "last-modified": lastModified
          });
        } else {
          // 其他静态资源使用强缓存
          res.setHeader("Cache-Control", "public, max-age=3600");
        }

        fs.readFile(fsPath, function(err, fileContent) {
          console.log(fsPath);
          if (err) {
            res.writeHead(404, "not found");
            res.end("<h1>404 Not Found</h1>");
          } else {
            if (isHtml && isFresh) {
              //如果缓存是最新的 则返回304状态码
              
              res.writeHead(304, "Not Modified");
              res.end();
            } else {
              //由于其他资源使用了强缓存 200
              res.end(fileContent);//200
            }
          }
        });
      }
    });
  })
  .listen(9966);
console.log("server is running on http://localhost:9966/");
