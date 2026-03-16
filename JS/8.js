fs = require("fs");
fs.writeFileSync("lec1.txt", "json");
fs.appendFileSync("lec1.txt", "Node");
data = fs.readFileSync("lec1.txt", "utf-8");
console.log(data);
console.log("process end");

// ********************************************************************

fs.copyFileSync("lec1.txt", "lec2.txt");
fs.renameSync("lec1.txt", "data.txt");
fs.unlinkSync("Lec2.txt");
//uptill now it was syncronized check 9.js
