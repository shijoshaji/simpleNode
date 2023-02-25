/**!SECTION
 *  NOTE: this is yo learn how to start the node servers
 *  some core modules are : http, https, fs, path, os
 * HTTP: launch server, send requests
 * HTTPs: launch SSL server, send requests
 *
 * run using node server.js
 *
 * we cant see the console log now, but can be seen if we open this localhost in a browser: http://localhost:3000/
 *
 */

// imports required
const http = require('http');
const routes = require('./routes');

function reqListner(req, res) {
  console.log(' using functions');
}

const server1 = http.createServer(reqListner); // using named function

const server2 = http.createServer(function (req, res) {
  // using anonymus function
  console.log(' using anonymus function');
});

const server = http.createServer(routes.requestHandler);

server.listen(3000);
// server1.listen(3001)
// server2.listen(3002)
