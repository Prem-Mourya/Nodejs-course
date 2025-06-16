// Module is like the collection of code which is privte to itself. It excist indepently.


const {x, addNum} = require('./export'); // here we are destructuring imports
const util = require("node:util"); // This is a module which is present in the core of the nodejs and this util module gives the excess to the util object.

console.log(x)
console.log(addNum(5,10))
