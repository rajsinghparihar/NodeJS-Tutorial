// path module helps in performing path related operations
// very interesting and useful module.
const path = require('path');

const a = path.basename('index.js');
const b = path.dirname('index.js');
console.log(a);
console.log(b);

// this gives the file extension of the input.
const c = path.extname(__filename);
console.log(__filename);
console.log(c);