/*
function orderPizza(callback){
    console.log("Pizza is being prepared...");
    callback();
}
function pizzaReady(){
    console.log("Pizza is ready to be served!");
}
*/

const fs = require('fs');

fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(data);
}); 