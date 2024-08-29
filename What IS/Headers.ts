import * as http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(
    "<div style='background-color: red'><span>Hello, World</span></div>"
  ); // res.write => Write the Response Body
  res.end("<div>End</div>"); // res.end => End the Response and Send the Response Body
});

// ** What is Headers??
//Headers are key-value pairs that provide additional information about the request or response.
//Headers are sent before the body of the request or response.

// ** Some Common Response Headers
//content-type: text/plain => The content is plain text
//content-type: text/html => The content is HTML
//content-type: application/json => The content is JSON
//content-type: image/jpeg => The content is an image in JPEG format
//content-type: application/pdf => The content is a PDF document
//content-type: application/xml => The content is XML

const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// ** URL => http://localhost:5000 => Browser => Compile => JavaScript => Node.js => Server => Response => Browser => Display
