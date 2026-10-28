const add = require('./app');

console.log(add(2,30));



const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});