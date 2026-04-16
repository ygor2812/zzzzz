const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {

  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`
      <h2>Moeda</h2>
      <form method="POST">
        Real: <input name="real"><br><br>
        Cotação Dólar: <input name="cotacao"><br><br>
        <button>Converter</button>
      </form>
    `)
  }

  if (req.method === 'POST') {
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', () => {
      const d = qs.parse(body)

      const dolar = d.real / d.cotacao

      res.end(`
        Em dólar: ${dolar}<br><br>
        <a href="/">Voltar</a>
      `)
    })
  }

}).listen(3000)