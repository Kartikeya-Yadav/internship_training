const http = require('http')
const EventEmitter = require('events')

// const myEmitter = new EventEmitter();

// myEmitter.on('order', (obj) => {
//     console.log(`Order recorded ${obj.orderId} of ${obj.amount}`);
// })

// myEmitter.emit('order',({orderId:1,amount:200}));


const Server = new EventEmitter();

Server.on('request', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello, Event-Driven Server");
});

http.createServer((req, res) => {
    Server.emit('request', req, res);
})