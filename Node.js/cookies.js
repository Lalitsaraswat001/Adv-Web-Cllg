// A cookie is a small piece of data stored in the user's browser.
// Not secured as compare to session
/*
 A session is a way to maintain user-specific state across multiple requests. In a common
 server-side session setup, the actual session data is server, while the browser stores a
 session Id in a cookie
*/
/*
cookie -> stored on user's browser
session -> stored on the server
*/

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.get('/set', (req, res) => {
    res.cookie('username', 'Rahul', {
        maxAge: 900000,
        httpOnly: true
    });

    res.send('Cookie set');
});
app.get('/get', (req, res) => {
    res.send('Username: ' + req.cookies.username);
});

app.get('/clear', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie cleared');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

