/* const chalk = require('chalk')
const text = require('./data')

console.log(chalk.green('Hello NodeJS'))
console.log(chalk.blue(text))

console.log(__dirname)
console.log(__filename) */

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',

    })

    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if(err) {
                throw err
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(data)
        })
    } else {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if(err) {
                throw err
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(data)
        })
    }
    //console.log(req.url)
})

server.listen(3000, () => {
    console.log('Server has been started!')
})
