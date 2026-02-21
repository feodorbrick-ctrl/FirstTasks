const http = require('http')
const eventEmitter = require('events')
const {handle} = require("express/lib/application");

const PORT = process.env.PORT || 5001;

const emitter = new eventEmitter();

class Router {
    constructor() {
        this.endpoints = {}
    }

    #request(method = 'GET', path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path]

        if (endpoint[method]) {
            throw new Error(`[${method} is already in use]`)
        }

        endpoint[method] = handler
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res)
        })
    }

    get(path, handler) {
        this.#request('GET', path, handler)
    }

    post(path, handler) {
        this.#request('Post', path, handler)
    }

    put(path, handler) {
        this.#request('Put', path, handler)
    }

    delete(path, handler) {
        this.#request('Delete', path, handler)
    }
}

const router = new Router()

router.get('/users', (req, res) => {
    res.end('You send request to /Users')
})

router.post('/users', (req, res) => {
    res.end('You send request to /Post')
})

const server = http.createServer((req, res) => {
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req ,res)
    if (!emitted) {
        res.end()
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});