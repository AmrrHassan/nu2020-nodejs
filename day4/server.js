var http = require('http');

let jsonObj = {
    'Name': 'AmrHassan';
}

let responseTxt = JSON.stringify(jsonObj)
http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World! </h1>');

}).listen(8000)
