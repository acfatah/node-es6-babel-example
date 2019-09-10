import http from 'http'

import dotenv from 'dotenv'
dotenv.config()

const protocol = 'http'
const address = '127.0.0.1'
const port = '80'
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(port, address)

console.log(`Server running at "${protocol}://${address}:${port}/".`)
console.log(`Running as "${process.env.NODE_ENV}".`)

export default server
