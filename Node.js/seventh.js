const EventEmitter = require('events');
const event = new EventEmitter();

event.on('login', () => {
    console.log("user logged in.");
});
event.on('logout', () => {
    console.log("user logged out.");
});

event.emit('login');
event.emit('logout');