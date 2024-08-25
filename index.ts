// ** Local Server => Request => Response

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('Hello World');
  res.end();
});

// ** How to run the server

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
