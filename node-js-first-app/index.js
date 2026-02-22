const http = require('http')
const eventEmitter = require('events')
const PORT = process.env.PORT || 5001;
const Router = require('./frameworks/Router')
const Emitter = require('./frameworks/Application')

const app = new Emitter()

const router = new Router()

router.get('/users', (req, res) => {
    res.end('You send request to /Users')
})

router.get('/posts', (req, res) => {
    res.end('You send request to /Post')
})

app.addRouter(router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))