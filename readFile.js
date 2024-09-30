function readFile(filePath, callback) {
  const fs = require("fs");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

readFile("example.txt", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
