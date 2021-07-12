// var http = require('http');

// http.createServer(function (req, res) {
//   // add a HTTP header:
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);

var fs=require('fs');
var http=require('http');
var server=http.createServer((req,res)=>{
  res.writeHead(400,{'content-type':'text/html'});
  var readStream=fs.createReadStream("index.html");
  readStream.pipe(res);
});
server.listen(2021,function(){
  console.log("Server Starting");
});