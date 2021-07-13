const { Console } = require('console');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;
const server = http.createServer((req,res) =>{
    console.log(req.url);
    // http status codes 
    // 200 - ok.
    // 500 - server error.
    // 404 - not found.
    res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
        res.statusCode = 200;
        const file = fs.readFileSync('index.html'); 
        res.end(file.toString());
    }
    else if(req.url == '/about'){
        res.statusCode = 200; 
        res.end('<h1> Hmm.... Monke!</h1>');
    }
    else if(req.url == '/monke'){
        res.statusCode = 200; 
        res.end('<h1> Hmm.... Big Monke!</h1>');
    }
    else{
        res.statusCode = 200;
        res.end('<h1>Reject Humanity Return to MONKE</h1> <img src="https://i.pinimg.com/originals/55/10/54/551054340cdd3a9ef4452ec51b513085.jpg">');
    }
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});