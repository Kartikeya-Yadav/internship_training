const fs = require("fs");

//create buffer of 20 bytes
const buffer01 = Buffer.alloc(20);

//write data into buffer
buffer01.write("Node Js Buffers");

//convert it to satring and print
const data = buffer01.toString();
console.log(data);


//create buffer from string
const bufffer02 = Buffer.from("Node Js Buffer 02", "utf-8");
console.log(bufffer02);
console.log(bufffer02.toString());



// Write data to a file
const write = (fileName: string, data: string) => {
    try {
        fs.writeFileSync(`./${fileName}`, data, "utf-8");
        console.log("File write Successful. . .");
    } catch (error) {
        console.log("Error in Writing File :", error.message);
    }
};

write("hello.txt", bufffer02.toString());

// Create a buffer and read data into it
const buffer03 = Buffer.alloc(20);

const read = (fileName: string, buffer: Buffer) => {
    try {
        const data = fs.readFileSync(`./${fileName}`, "utf-8");
        console.log("File Read Successful. . .");
        buffer.write(data);
        console.log("Data Stored in buffer. . .");
        console.log(buffer.toString());
    } catch (error) {
        console.log("Error in Reading File: ", error.message);
    }
};

read("hello.txt", buffer03);