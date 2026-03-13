// var path = require("path");
// var a = path.basename("D:/Bhavya_FSD/js/t1/8.js");
// console.log(a);
// var b = path.extname("D:/Bhavya_FSD/js/t1/8.js");
// console.log(b);
// var c = path.dirname("D:/Bhavya_FSD/js/t1/8.js");
// console.log(c);
// d = path.parse("D:/Bhavya_FSD/js/t1/8.js");
// console.log(d);
// if (d.ext == ".txt") {
//   console.log("file is text base");
// } else {
//   console.log("file is other base");
// }

// path task 2

fs = require("fs");
path = require("path");
let pa = " FSD-mern/path.txt";
dn = path.parse(pa);
dir = dn.dir;
fs.mkdir(dir, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("path created");
  }

  fs.writeFile(pa, "data write", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data written");
    }
    fs.copyFile(pa, dir + "/newf.txt", (err) => {
      if (err) {
        throw err;
      } else {
        console.log("created copy");
      }
      fs.unlink(pa, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(pa, "deleted");
        }
      });
    });
  });
});
