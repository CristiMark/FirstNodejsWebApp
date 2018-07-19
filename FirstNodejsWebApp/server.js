

'use strict';
var http = require('http');
var fs = require('fs');

var port = process.env.PORT || 1337;

function send404Response(response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Error 404 : File not found");
    response.end();
}

function OnRequest(request, response) {
    if (request.method == 'GET' && request.url == '/')
    {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./index.html").pipe(response);
    } else
    {
        send404Response(response);
    }
}


http.createServer(OnRequest).listen(port);
