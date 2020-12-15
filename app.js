//load http module
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//creating the server
const server  = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello World');
});

//running the server
server.listen(port,hostname,()=>{
    console.log('Server running at http://$(hostname):$(port)/');
});