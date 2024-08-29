"use strict";
// ** Local Server => Request => Response
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require('http'); // => CommonJS Module
var http = require("http"); // => ES6 Module
var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<div style='background-color: red'><span>Hello, World</span></div>"); // res.write => Write the Response Body
    res.end("<div>End</div>"); // res.end => End the Response and Send the Response Body
});
var port = 5000; // Port Number
server.listen(port, function () {
    console.log("Server is running on port ".concat(port));
}); // Listen for Incoming Requests on Port 5000
// ** URL => http://localhost:5000 => Browser => Compile => JavaScript => Node.js => Server => Response => Browser => Display
