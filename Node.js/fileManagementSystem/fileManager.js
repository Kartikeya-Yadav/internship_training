
const fs = require("fs");
const path = require("path");

// let buffer = Buffer.from(data);

const read = (fileName) =>{
    return fs.readFileSync(`./files/${fileName}`, "utf-8", (error, data) => {
        if (error) {
            console.log("Error in Reading File: ", error.message);
        } else {
            console.log("File Read Successful. . .");
            console.log(`File contents: ${data}`);
            
        }
    });
};


const write = (fileName, data) => {
    return fs.writeFileSync(`./files/${fileName}`, data, "utf-8", (error) => {
        if (error) {
            console.log("Error in Writing File :", error.message);
        } else {
            console.log("File write Successful. . .");
        }
    });
};


const append = (fileName, data)=> {
    let buffer = Buffer.from(data);
    return fs.appendFileSync(`./files/${fileName}`, buffer, "utf-8", (error) => {
        if (error) {
            console.log("Error in Appending File :", error.message);
        } else {
            console.log("File Append Successful. . .");
        }
    });
};


const deleteFile = (fileName)=> {
    return fs.unlink(`./files/${fileName}`, (error) => {
        if (error) {
            console.log("Error in Deleting File :", error.message);
        } else {
            console.log("File Detete Successful. . .");
        }
    });
}


module.exports = {
    read,
    write,
    append,
    deleteFile
}