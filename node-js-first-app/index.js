const PORT = process.env.PORT || 5001;
const Application = require('./frameworks/Application')
const userRouter = require('./src/user_router')
const jsonParser = require('./frameworks/parseJson')
const parseUrl = require('./frameworks/parseUrl')

const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:5001'))
app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))