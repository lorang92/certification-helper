var WebSocketServer = require('websocket').server;
var http = require('http');
var fs = require('fs');
var util = require('util')

/* ================================================================================================= 
 * HTTP handler
 * =================================================================================================*/

// Create an HTTP server object.
var server = http.createServer(onHttpRequest);

// Handle HTTP requests.
function onHttpRequest(request, response) {
  console.log(new Date() + ' Received HTTP request for ' + request.url);

  if (request.url == '/') {
    fs.readFile(__dirname + '/index.html', function(err, data) {
      if (err) {
        res.writeHead(500);
        return response.end('Error loading index.html');
      }

      response.writeHead(200);
      return response.end(data);
    });
  } else {
    response.writeHead(404);
    response.end();
  }
}

// Start the HTTP server object listening on port 8888.
server.listen(8888, function() {
  console.log(new Date() + ' Server is listening on port 8888');
});

/* ================================================================================================= 
 * Web Sockets server
 * =================================================================================================*/

// Create a WebSocketServer object.
var wsServer = new WebSocketServer({
  httpServer: server, // Use the HTTP server object.
  autoAcceptConnections: false // Don't automatically accept connections - always check origin!
});

// Maintain a collection of clients.
var clientList = new Array();

// Handle Web Socket requests.
wsServer.on('request', onWsRequest);

function onWsRequest(request) {
  //console.log(util.inspect(request));

  var username = request.resourceURL.query.username;

  console.log(new Date() + ' User ' + username + ' joined.');
  var connection = request.accept(null, request.origin);
  clientList.push(connection);

  // Handle connection message events.
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      console.log(util.inspect(connection));

      console.log('Received message from ' + username + ': ' + message.utf8Data);

      broadcast(username + ': ' + message.utf8Data);
      //connection.sendUTF('Server bouncing back message: ' + message.utf8Data);
    } else {
      console.error('Received unknown data-type ' + message.type);
    }
  });

  // Handle connection close events.
  connection.on('close', function(reasonCode, description) {
    console.log(new Date() + ' User ' + username + ' left.');

    broadcast('[' + username + ' has left the chat room]');

    // Remove connection from map.
    var idx = clientList.indexOf(connection);
    clientList.splice(idx, 1);
  });
}

// Helper function, sends a message to all current clients.
function broadcast(message) {
  clientList.forEach(function (client) {
    if (client.connected) {
      client.sendUTF(message);
    }
  });
}
