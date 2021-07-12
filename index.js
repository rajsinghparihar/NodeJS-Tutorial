console.log("Hello world");
// single thread can manage multiple connections.
// node js op

// common commands for npm (node package manager)

/*
npm init - initializes the project with a package.json file
           along with all the project information like author
           and other things.
npm install <package name>
eg npm install express - installs express framework to project.

npm install -g express - installs express to your pc, it means
                         we can use express to any future 
                         projects without worrying about
                         installing it again. (global installation)
*/
/*
    // node modules folder contains all the modules like express
    // mongoose, nodemon, etc.

    // NOTE!!!! Never push nodemodules folder to github. (Too large!!!)

    // dev dependencies. {those dependencies that we wanna use}
    //                   {only during development}
    // like nodemon
    // npm install --save-dev nodemon
    // or
    // npm install -D nodemon
    // one more thing: package.lock.json contains information
       about all the dependencies of the project and the 
       dependencies of those dependencies. (it contains the dependency tree)
       all the packages that are in the node_modules folder.
*/

// IMPORTS in node js!!! (NEW TOPIC)
// we're using the require method to get the exported data 
// from second.js

// in second.js, we used module.exports = data to export our
// data object from second.js to any other file that may import this.
const data = require('./second');
console.log(data);

// this style of importing is called common js module import
// second.js is the common js module here.