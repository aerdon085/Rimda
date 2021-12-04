// Ctrl+C to stop terminal run


// SECTION: globals


__dirname // path to current directory
__filename // filename
require // function to use modules (CommonJS)
module // info about current module (file)
process // info about environment where program is being executed


// SECTION: modules
// it is an encapsulated code, like header files in C/C++
// in CommonJS, used by node, every file is a module by default

// refer to 1_Modules folder for example and explanation


// SECTION: built-in modules (os)


// use os built-in module
const os = require("os");

// info about current user
const user = os.userInfo();
// console.log(user); {uid: -1, gid: -1, username: 'user', homedir: 'C:\\Users\\user', shell: null}

// method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`); // "The system uptime is 681629 seconds."

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMemL: os.freemem()
}
console.log(currentOS); // {name: 'Windows_NT', release: '10.0.19042', totalMem: 21184159744, freeMemL: 12363751424}


// SECTION: built-in modules (path)


// use path built-in module
const path = require("path");

// log file path
const filePath = path.join("2_osModules", "app.js");
console.log(filePath); // "2_osModules\app.js"

// log end file of given/passed path argument
const base = path.basename(filePath);
console.log(base); // "app.js"

// log absolute path
const absolute = path.resolve(__dirname, "2_osModules", "app.js");
console.log(absolute); // "b:\rimda.html\Rimda\Node and Express\2_osModules\app.js"


// SECTION: