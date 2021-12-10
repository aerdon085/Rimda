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


// SECTION: built-in modules (fs) sync
// useful methods for writing and reading files in node


/* instead of doing this:
const fs = require("fs");
const module0 = fs.readFileSync("Node and Express/1_Modules/module0.js", "utf8");

it may be done like this instead: */
const {readFileSync, writeFileSync} = require("fs");
const module0 = readFileSync("Node and Express/1_Modules/module0.js", "utf8");
// the above will read a file, or create one based on the first argument (like C's fopen("...", 'r'))
// the second argument is the file encoding

console.log(module0); // whatever is written in the file will be logged

/* below will write (or overwrite if already existing) to a file based on first argument (like C's fopen("...", 'w')) and the second argument as content
writeFileSync("Node and Express/1_Modules/result-sync.txt", `Here is the result ${module0}`);

but if a third argument is passed, depending on the argument, it may be appended instead of overwriting what is in the file */
writeFileSync("Node and Express/1_Modules/result-sync.txt",
`Here is the result ${module0}`,
{flag: "a"});


// SECTION: built-in modules (fs) async
// the only difference is the different name of the method for fs built-in module and its parameters which ask for a callback function


const {readFile, writeFile} = require("fs");

readFile("Node and Express/1_Modules/module0.js", "utf8", (err, result)=>{
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;

    // although for this part, the program returns an undefined value, the content of opened and read file which is module0.js will be on first argument of writeFile
    writeFile("Node and Express/1_Modules/result-async.txt",
    `Here is the result: ${first}`,
    (err, result)=>{
        if (err) {
            console.log(err);
            return;
        }

        console.log(result); // undefined
    });
});


// SECTION: http module


const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req); // this sends an object regarding the server page

    res.write("Welcome to our home page");
    res.end();
});

server.listen(5000); // the argument is the id of some sort "url: localhost:5000"


// SECTION: more use of http module
// refer to "Node and Express\2_httpModule\server0.js" for examples


// SECTION: npm


/* npm commands, comes with node
 * npm --version or npm --v
 * 
 * local dependency, used only in a particular project
 * npm i <packageName>
 * 
 * global dependency, used in any project
 * npm install -g <packageName>
 * sudo npm install -g <packageName> (if on mac)
*/


// SECTION: