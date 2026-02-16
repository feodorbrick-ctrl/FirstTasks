const Emitter = require('events')

const emitter = new Emitter()
let i = 1

const callback = (data, second, third) => {
    console.log(i + ': you are written ' + data);
    console.log('second orgument ' + second);
    console.log();
    i++
}

emitter.on('message', callback)
emitter.emit('message')

emitter.emit('message')

// emitter.removeAllListeners()
emitter.removeListener('message', callback)

emitter.emit('message')
emitter.emit('message')
emitter.emit('message')
//
//
// const MESSAGE = process.env.message || '';
//
// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 123)
// } else {
//     emitter.emit('message', 'you aren`t selected message')
// }