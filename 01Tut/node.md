<!-- How Node js differs from Vanilla js -->

1. Node runs on a server - not in browser (Frontend not Backend)
2. The console is the terminal window
3. In node js there is global object instead of Window Object.
   a. that means we cannot use any document apis here like document.getElementById or window.InnerHeight etc
   b. we have some similar objects in 'global' window object.
   c. to know more about global object you console.log(object);
   d. it has common core modules that we will explore.
   e. CommonJS modules instead of ES6 modules.
   a. for example in ES6 we import by using 'import 'react' from React'; but in commonJS modules we export like this 'require(express)';
4. in Node js we can create our own modules and export it using module.exports = {modulename} and we can import it by specifying the directory where it is located const add = require('./add') and we can use it like add.multiply()
