"use strict";
// // ** Local Server => Request => Response
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// // const http = require('http'); // => CommonJS Module
// import * as http from "http"; // => ES6 Module
// const data = {
//   products: [
//     {
//       id: 1,
//       name: "Product 1",
//       price: 100,
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 200,
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 300,
//     },
//   ],
// };
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/json" });
//   res.write(JSON.stringify(data)); // res.write => Write the Response Body
//   res.end("<div>End</div>"); // res.end => End the Response and Send the Response Body
// });
// const port = 5000; // Port Number
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// }); // Listen for Incoming Requests on Port 5000
// // ** URL => http://localhost:5000 => Browser => Compile => JavaScript => Node.js => Server => Response => Browser => Display
// ** Routing => Different Responses for Different Requests
// const http = require('http'); // => CommonJS Module
const http = __importStar(require("http")); // => ES6 Module
const data = {
    products: [
        {
            id: 1,
            name: "Product 1",
            price: 100,
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
        },
        {
            id: 4,
            name: "Product 4",
            price: 400,
        }
    ],
};
const server = http.createServer((req, res) => {
    console.log(req.url); // Request URL
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Home Page</h1>");
        res.end();
        return;
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>About Page</h1>");
        res.end();
        return;
    }
    else if (req.url === "/api/products") {
        res.writeHead(200, { "Content-Type": "text/json" });
        res.write(JSON.stringify(data));
        res.end();
        return;
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
        return;
    }
    // res.writeHead(200, { "Content-Type": "text/json" });
    // res.write(JSON.stringify(data)); // res.write => Write the Response Body
    // res.end("<div>End</div>"); // res.end => End the Response and Send the Response Body
});
const port = 5000; // Port Number
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); // Listen for Incoming Requests on Port 5000
// ** URL => http://localhost:5000 => Browser => Compile => JavaScript => Node.js => Server => Response => Browser => Display
