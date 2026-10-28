const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello\n');
writeStream.write('This is\n');
writeStream.end('Streamed Data\n');

writeStream.on('finish', () => {
    console.log('Finished writing.');

    const readStream = fs.createReadStream('output.txt', 'utf-8');

    readStream.on('data', (chunk) => {
        console.log(chunk);
    });

    readStream.on('end', () => {
        console.log('Finished reading.');

        const readStream2 = fs.createReadStream('output.txt');
        const copyStream = fs.createWriteStream('copy.txt');

        readStream2.pipe(copyStream);

        copyStream.on('finish', () => {
            console.log('Finished copying.');
        });

        readStream2.on('error', (err) => {
            console.error('Error reading file:', err);
        });
    });
}); 