// Readable
// Writable
// Duplex - Readable + Writable
// Transform - Duplex + can

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// })

// const stream = fs.createReadStream(path.resolve(__dirname,'test.txt'))
//
// stream.on('data', (chunk) => {
//     console.log(chunk);
// })
//
// stream.on('end', () => console.log('Reading is stoped'))
// stream.on('open', () => console.log('Reading is starting'))
// stream.on('error', (e) => console.error(e))