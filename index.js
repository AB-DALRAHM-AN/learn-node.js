"use strict";
// ** Local Server => Request => Response
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require('http'); // => CommonJS Module
var http = require("http"); // => ES6 Module
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Write Header Accept 2 Parameters: Status Code is Required, Object of Response Headers is Optional
    // Content-Type: is a Response Header that tells the browser what type of content is being sent back from the server
    res.end("Hello, World"); // End the Response and Send the Response Body
});
var port = 5000; // Port Number
server.listen(port, function () {
    console.log("Server is running on port ".concat(port));
}); // Listen for Incoming Requests on Port 5000
// ** URL => http://localhost:5000 => Browser => Compile => JavaScript => Node.js => Server => Response => Browser => Display
