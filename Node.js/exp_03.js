const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from express with http");
});

// create the server
const server = http.createServer(app);  //for viva

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});  

/*
    1> Import
    2> Create an instance of express
    3> Define routes
*/

