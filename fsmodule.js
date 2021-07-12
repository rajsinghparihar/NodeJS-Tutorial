// fs : file system module helps in
// managing : reading, creating, deleting, manipulating
// files and folders from the code 
const fs = require('fs');

fs.readFile('file.txt','utf-8', (err,data)=>{
    console.log(err, data);
});

const a = fs.readFileSync('file.txt');

console.log(a.toString());
