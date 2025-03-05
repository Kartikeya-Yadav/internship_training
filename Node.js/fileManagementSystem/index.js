
console.log("__dirname : " + __dirname);
console.log("__filename :" + __filename);



const { read, write, append, deleteFile } = require("./fileManager")

setInterval(() => {
    console.log("System Status log every 5 second: System Running");
}, 5000);

dataToWrite = "This is a sample data to write. "
dataToAppend = "This is a sample data to apend. "

console.log("Writing data to file...");
setTimeout(async()=>{
    await write('fileTwo.txt', dataToWrite);
})



setTimeout(()=>{
    console.log("Reading data from file...");
},500)

setTimeout(async()=>{
    const data = read('fileTwo.txt');
    console.log(data);

    console.log("Appending data to file...");
    append('fileTwo.txt', dataToAppend);
    
    console.log("Deleting file...");
    deleteFile('fileTwo.txt');
},3000)

setTimeout(()=>{
    console.log(`Node.Js Version: ${process.version}`);
    console.log(`Platform: ${process.platform}`)
    console.log(`Process Id: ${process.pid}`);
},3100)




