const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('output.txt');
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream('input.txt.gz');

readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File compressed!');
});