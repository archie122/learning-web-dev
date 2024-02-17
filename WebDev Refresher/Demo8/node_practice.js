const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

// Basic HTTP Server
        // const server = http.createServer((req, res) => {
        //     console.log(req.url)
        //     res.writeHead(200, { 'Content-Type': 'text/html' })
        //     res.end('<h1>Hello World</h1>')
        // })

// More Advanced Server

const server = http.createServer((req, resp) => {
    const filename = 'index.html'
    fs.readFile(filename, (err, data) => {
        if (err) {
            resp.writeHead(404, { 'Content-Type': 'text/html' })
            return resp.end('404 Not Found')
        }
        resp.writeHead(200, { 'Content-Type': 'text/html' })
        resp.write(data)
        return resp.end()
    })
})

server.listen(3000)
console.log('Listening on localhost:3000')