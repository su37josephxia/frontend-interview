const http = require('http')
http.createServer((req, res) => {
    console.log('http request:',req.url ,req.headers.host)
    res.end(new Date().toTimeString())
})
.listen(7777, () => {
    console.log('server at 7777')
})
