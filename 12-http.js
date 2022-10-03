const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.end('Welcome to my home page')
    }
    // console.log(req)
    if(req.url == '/about'){
        res.end('Welcome to my about page')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>Cant find the page you looking for</p>
    <a href = "/"> back home </a>
    `)
}
)

server.listen(5000)