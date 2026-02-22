const http = require('http')
const EventEmitter = require('events')

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter()
        this.server = this.#createServer()
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path]
            Object.keys(endpoint).forEach(method => {
                const handler = endpoint[method]
                this.emitter.on(this.#getRouterMask(path, method), (req, res) => {
                    handler(req, res)
                })
            })
        })
    }

    #createServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this.#getRouterMask(req.url, req.method), req ,res)
            if (!emitted) {
                res.end()
            }
        })
    }

    #getRouterMask(path, method) {
        return `[${path}]:[${method}]`
    }
}