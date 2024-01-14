const os = require("os");
const path = require("path");

const math = require("./math");

console.log(math.add(4, 3));
console.log(math.sub(4, 3));
console.log(math.multiply(4, 3));
console.log(math.divide(4, 3));

// the above way is the one of the ways we can import our custom modules, there is also another way below

const { add, sub, multiply, divide } = require("./math");
console.log("destructuring", add(3, 5));
