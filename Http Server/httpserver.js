const http = require('http');

//createServer - method - creates a server
//www.google.com/ineuron
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello, This is http servver response\n");
        res.end();
    }
    if(req.url == '/ineuron/courses'){
        res.write(JSON.stringify(['BlockChain','Data Science','Java','WebDevelopment']));
        res.end();
    }
});



//listening on a port 
server.listen(3000);
console.log("listening on port 3000");