const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

app.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})
app.post('/track-data', (req, res) => {
    console.log("Stored Data", req.body.data);
    res.status(200).json({ message: 'success' })
})

module.exports = {
    path: '/api',
    handler: app
}