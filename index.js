

const http = require("http");
const port = 8080;

const server = http.createServer(function(request, result) {
    
    //result.writeHead(200,"")
    result.write("Hello World");
    result.statusCode = 200;
    result.end();

    console.log(`Received GET request from ${request.url}`);

})

console.log(`Server is listening on port ${port}`)
server.listen(port);