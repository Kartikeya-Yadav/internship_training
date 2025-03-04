const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/node', (req, res) => {
    res.send('Hello from node. . .');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


