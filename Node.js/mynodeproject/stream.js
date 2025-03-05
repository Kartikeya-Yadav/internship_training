const fs = require("fs");

// const readStream = fs.createReadStream("./tutorials/demo.txt", {encoding: "utf-8", highWaterMark: 1});

// readStream.on("data", (chunk) => {
//     console.log(chunk.toString());

// });

// readStream.on("error", (error)=> {
//     console.log(error);

// });

//---------------------------------------------------------------------------------------

// const readStream = fs.createReadStream("input.txt");
// const writeStream = fs.createWriteStream("output.txt");


// Example: Stream a large file via http
// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res)=>{
//     const readStream = fs.createReadStream("./tutorials/demo.txt");
//     res.writeHead(200, {"content-type": "text/plain"});
//     readStream.pipe(res);
// }).listen(3000, ()=> {
//     console.log("Server running on http://localhost:3000");
// })


//Reading from file
fs.readFile('Hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

//Writing data in file
setTimeout(() => {
    fs.writeFile("Hello.txt", "Hi, This is new data. ", "utf-8", (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully.');
    });
}, 1000);

//Apend data in filr
setTimeout(() => {
    fs.appendFile("Hello.txt", "Hi, This is second data to append. ", "utf-8", (err) => {
        if (err) {
            console.error('Error appending file:', err);
            return;
        }
        console.log('File appended successfully.');
    });
}, 2000);