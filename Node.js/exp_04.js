/*
Q1 Develop a basic HTTP server using Node.js and Express.js that handles HTTP requests and sends appropriate responses to the client. The server should provide different routes for a home page, an about page, and a user information page.
Requirements:
- Create an HTTP server using Express.js.
- Run the server on port 3000.
- Create a GET / route that displays a welcome message.
- Create a GET /about route that displays information about the application.
- Create a GET /user route that returns basic user information in JSON format.
- Display a message in the console when the server starts successfully.
*/

const express = require("express");

const app = express();
app.get("/", (req, res) => {
    res.send("Welcome to the HTTP Server!");
});

app.get("/about", (req, res) => {
    res.send("This is the About page of the application.");
});

app.get("/user", (req, res) => {
    res.json({
        name: "Lalit",
        age: 20,
        course: "B.Tech CSE AI",
        college: "NIET"
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// status code 404 and 500 error handling