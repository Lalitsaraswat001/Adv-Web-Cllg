const fs = require("fs");

const readableStream = fs.createReadStream("output.txt", {
    encoding: "utf8"
});

const writableStream = fs.createWriteStream("student-copy.txt");

readableStream.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
    writableStream.write(chunk);
});

readableStream.on("end", () => {
    console.log("File reading completed.");
    writableStream.end();
});

readableStream.on("error", (err) => {
    console.log("Error reading file:", err.message);
});

writableStream.on("error", (err) => {
    console.log("Error writing file:", err.message);
});

writableStream.on("finish", () => {
    console.log("File copied successfully to student-copy.txt");
});