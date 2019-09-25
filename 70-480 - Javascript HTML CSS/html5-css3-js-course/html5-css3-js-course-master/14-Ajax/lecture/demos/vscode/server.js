var http = require('http');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var url = require('url');

var port = 3000;

function requestHandler(request, response) {
  var uri = url.parse(request.url);
  var query = querystring.parse(uri.query);

  switch (uri.pathname) {
    case '/EchoInUppercase':
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write(query.text.toUpperCase());
      response.end();
      break;
    case '/EchoInUppercaseMultipleTimes':
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      var result = '';
      for (var i = 0; i < query.repeatCount; i++)
      {
          result += query.text + " ";
      }
      response.write(result.toUpperCase());
      response.end();
      break;
    default:
      var filePath = uri.pathname === '/' ? './index.html' : '.' + uri.pathname;

      fs.readFile(filePath, 'binary', function(err, file) {
        if (err) {
          response.writeHead(500, { 'Content-Type': 'text/plain' });
          response.write(err + '\n');
          response.end();
          return;
        }
  
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(file, 'binary');
        response.end();
      });
      break;
  }
}

var server = http.createServer(requestHandler);

server.listen(port, function(err) {
  if (err) {
    console.error('something bad happened', err);
    return;
  }

  console.log(`server is listening on ${port}`);
});
