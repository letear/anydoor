const http = require('http')
const conf = require('./config/defaultConfig')
const chalk = require('chalk')
const path = require('path')
const route = require('./helper/route')



const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url)
  route(req, res, filePath)
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'text/html')
  // res.write('<html>')
  // res.write('<body>')
  // res.write('hello http')
  // res.write('</body>')
  // res.end('</html>')
})

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`
  console.info(`Server started at ${chalk.green(addr)}`)
})
