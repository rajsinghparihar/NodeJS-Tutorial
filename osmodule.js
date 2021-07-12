// import os module (builtin module)
const os = require('os');

// returns available ram in bytes
console.log(os.freemem()); 

// tells the home directory name
console.log(os.homedir());

// tells which os platform is running on the machine
console.log(os.platform());

// tells the os version
console.log(os.release());

// tells the os type {windows_NT for windows 10}
console.log(os.type());