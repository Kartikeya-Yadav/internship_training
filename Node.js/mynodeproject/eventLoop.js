//Working procedure of event loop

// console.log('Satrt');

// setTimeout(() =>{
//     console.log('TimeOut Callback');
// }, 0);

// Promise.resolve().then( () => {
//     console.log('Promice Resolved');
// });

// console.log('End');

const fs = require('fs')

console.log('Start of Script');

fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log('File content read succesfully');
});

Promise.resolve().then(() => {
    console.log('DataBase Query complete');
});

setTimeout(() => {
    console.log('HTTP request processed');
})

console.log('End of Script');


