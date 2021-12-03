/* this is main file
module1.js for name variables
module2.js for functions
*/

// now accessing module exports by other files
// NOTE: when you create your own module, you must use "./" as start rather than without
const names = require("./module1");
const sayHi = require("./module2");

// the name variables from file module1.js can now be accessed
console.log(names); // { john: 'John', peter: 'Peter' }

sayHi("Sussy"); // Hello there Sussy!
sayHi(names.john); // Hello there John!
sayHi(names.peter); // Hello there Peter!

// found in alternative.js, a new way of exporting had been demonstrated but can still be called (required) the same way:
const data = require("./alternative");
console.log(data); // {items: ['item0', 'item1'], singlePerson: {name: 'Bob'}}
sayHi(data.singlePerson.name); // Hello there Bob!

// found in minGrenade.js, even without exporting the said file, the function found in it will still be invoked because (1) the function itself was invoked there and (2) when modules are required they are wrapped as functions
require("./mindGrenade");