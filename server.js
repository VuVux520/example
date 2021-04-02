var http = require("http");
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain-text'});
  res.end("Hello, I'm a Node js Server")
}).listen(3000);
console.log("Listening on port 3000... ");