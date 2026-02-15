const path = require('path');

console.log('get ... =>', path.join(__filename, 'first', 'second', 'third'));
const fullPath = path.resolve('first', 'second', 'third');
console.log(path.parse(fullPath));
console.log(path.sep);
console.log(path.isAbsolute('first/second'));
console.log(path.basename(fullPath));
console.log(path.extname(fullPath));

// --------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);

console.log(url);