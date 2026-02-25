const Router = require('../frameworks/Router')

const router = new Router()

const users = [
    {id: 1,  name: 'wiskakakas'},
    {id: 2,  name: 'arbusio'},
]

router.get('/users', (req, res) => {
    console.log(req.params, users)
    res.send(users)
})

router.post('/users', (req, res) => {
    console.log(req.body)
    const user = req.body
    users.push(user)
    res.send(users)
})

module.exports = router