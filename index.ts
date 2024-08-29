// ** Local Server => Request => Response

// const http = require('http'); // => CommonJS Module
import * as http from "http"; // => ES6 Module

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
  ],
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  res.write(JSON.stringify(data)); // res.write => Write the Response Body
  res.end("<div>End</div>"); // res.end => End the Response and Send the Response Body
});

const port = 5000; // Port Number

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); // Listen for Incoming Requests on Port 5000

// ** URL => http://localhost:5000 => Browser => Compile => JavaScript => Node.js => Server => Response => Browser => Display
