const fs = require("fs");
const path = require("path");

// console.log('START')
//
// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//     if  (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log('directory is created ')
//     }
// });
//
// console.log('END')

// fs.rmdir(path.resolve(__dirname,'test.txt'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwertu 7 9 10',  (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File saved!");
// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'heeeeeeeeeeeeeeeeeee heeeeeeeeeeeeeeeee heeeeeeeeeeee',  (err) => {
//     if (err) {
//         throw err;
//     }
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        } else {
            resolve();
        }
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        } else {
            resolve();
        }
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message);
        } else {
            resolve(data);
        }
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message);
        } else {
            resolve();
        }
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'bfbf')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' 135'))  // Added 'test.txt' as file path and '135' as data
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' 357'))  // Added data
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' 579'))  // Added data
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch((err) => console.log(err));

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('file was remowed'))
//     .catch((err) => console.log('error:', err.message));