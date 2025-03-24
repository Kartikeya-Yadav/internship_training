var fs = require("fs");
// Create buffer of 20 bytes
var buffer01 = Buffer.alloc(20);
//write data 
buffer01.write("Node Js Buffers");
// Convert it to satring and print
var data = buffer01.toString();
console.log(data);
// Create buffer from string
var bufffer02 = Buffer.from("Node Js Buffer 02", "utf-8");
console.log(bufffer02);
console.log(bufffer02.toString());
// Write data to a file
var write = function (fileName, data) {
    try {
        fs.writeFileSync("./".concat(fileName), data, "utf-8");
        console.log("File write Successful. . .");
    }
    catch (error) {
        console.log("Error in Writing File :", error.message);
    }
};
write("hello.txt", bufffer02.toString());
// Create a buffer and read data into it
var buffer03 = Buffer.alloc(20);
var read = function (fileName, buffer) {
    try {
        var data_1 = fs.readFileSync("./".concat(fileName), "utf-8");
        console.log("File Read Successful. . .");
        buffer.write(data_1);
        console.log("Data Stored in buffer. . .");
        console.log(buffer.toString());
    }
    catch (error) {
        console.log("Error in Reading File: ", error.message);
    }
};
read("hello.txt", buffer03);
