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

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'))
// for (let i = 0; i < 21; i++) {
//     writableStream.write(i + '\n');
// }
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

// const http = require('http')
//
// http.createServer((req, res) => {
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//     stream.pipe(res)
// })