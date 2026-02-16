const os = require('os')
const cluster = require('cluster')

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork();
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker with pid = ${worker.process.pid} died`);
//         if (code === ) {
//             cluster.fork();
//         } else {
//             console.log('worker is died...');
//         }
//     })
// } else {
//     console.log(`worker with pid= ${process.pid} starting`);
//
//     setInterval(() => {
//         console.log(`worker with pid= ${process.pid} is running`);
//     }, 5000)
// }