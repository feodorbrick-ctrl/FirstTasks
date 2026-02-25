const http = require('http')
const EventEmitter = require('events')

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter()
        this.server = this.#createServer()
        this.middlewares = []
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    use(middleware) {
        this.middlewares.push(middleware)
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path]
            Object.keys(endpoint).forEach(method => {
                this.emitter.on(this.#getRouterMask(path, method), (req, res) => {
                    const handler = endpoint[method]
                    handler(req, res)
                })
            })
        })
    }

    #createServer() {
        return http.createServer((req, res) => {
            let body = ''
            req.on('data', chunk => {
                body += chunk
            })

            req.on('end', () => {
                if (!body) {
                    res.end()
                }
            })
            this.middlewares.forEach((middleware) => middleware(req, res))
            console.log(req.pathname)
            const emitted = this.emitter.emit(this.#getRouterMask(req.pathname, req.method), req ,res)
            if (!emitted) {
                res.end()
            }
        })
    }

    #getRouterMask(path, method) {
        return `[${path}]:[${method}]`
    }
}