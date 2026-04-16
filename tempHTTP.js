const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {

  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`
      <h2>Temperatura</h2>
      <form method="POST">
        Celsius: <input name="c"><br><br>
        <button>Converter</button>
      </form>
    `)
  }

  if (req.method === 'POST') {
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', () => {
      const d = qs.parse(body)

      const f = (d.c * 9/5) + 32
      const k = parseFloat(d.c) + 273.15

      res.end(`
        Fahrenheit: ${f}<br>
        Kelvin: ${k}<br><br>
        <a href="/">Voltar</a>
      `)
    })
  }

}).listen(3000)