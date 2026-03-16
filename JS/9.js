fs = require("fs");
fs.writeFile("lec1.txt", "json", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Data written");
  }

  fs.appendFile("lec1.txt", "we are number 1", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("data appended");
    }

    fs.readFile("lec1.txt", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(data);
      }
    });
  });
});
