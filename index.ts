// ** Local Server => Request => Response

// const http = require('http'); // => CommonJS Module
import * as http from "http"; // => ES6 Module
import { json } from "stream/consumers";

const data = JSON.stringify({
  name: "John Doe",
  age: 25,
  email: "aaa@gmail.com",
  isStudent: true,
  subjects: ["Math", "Science", "English"],
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  res.write(data); // res.write => Write the Response Body
  res.end("<div>End</div>"); // res.end => End the Response and Send the Response Body
});

const port = 5000; // Port Number

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); // Listen for Incoming Requests on Port 5000

// ** URL => http://localhost:5000 => Browser => Compile => JavaScript => Node.js => Server => Response => Browser => Display
