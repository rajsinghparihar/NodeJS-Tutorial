const { Console } = require('console');
const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer((req,res) =>{
    console.log(req.url);
    res.statusCode = 200; // http status codes 
                          // 200 - ok.
                          // 500 - server error.
                          // 404 - not found.
    res.setHeader('Content-Type','text/html');
    res.end('<h1> Hmm.... Monke!</h1>');
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});