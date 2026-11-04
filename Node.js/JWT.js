const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const SECRET = process.env.JWT_SECRET || 'your_secret_key';

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign(
            { username },
            SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token });
    }

    return res.status(401).json({
        message: 'Invalid credentials'
    });
});

app.get('/home', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'Invalid or expired token'
            });
        }

        return res.status(200).json({
            message: `Welcome, ${decoded.username}`
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});