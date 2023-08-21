const http = require("http")

const server = http.createServer((req, res)=>{
    console.log('user hit the sever')
    res.end('home page')
})

server.listen(2137)

