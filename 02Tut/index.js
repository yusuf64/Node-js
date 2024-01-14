const fs = require("fs");

fs.readFile("./files/hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});
