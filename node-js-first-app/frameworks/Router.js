module.exports = class Router {
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