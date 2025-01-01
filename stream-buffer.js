const http = require("http");
const server = http.createServer();
const fs = require("fs");
const { buffer } = require("stream/consumers");

// listener

server.on("request", (req, res) => {
  // console.log(req.url, req.method);
  if (req.url === "/read-file" && req.method === "GET");
  // steaming file reading
  const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt");
  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.end("Hello from world !");
  });
});

server.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});

// const http = require('node:http');

// const server = http.createServer((req, res) => {
//   res.end();
// });
// server.on('clientError', (err, socket) => {
//   socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });
// server.listen(8000);
