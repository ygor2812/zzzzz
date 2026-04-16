const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {

  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.end(`
      <h2>Triângulo</h2>
      <form method="POST">
        Base: <input name="base"><br><br>
        Altura: <input name="altura"><br><br>
        Lado A: <input name="a"><br><br>
        Lado B: <input name="b"><br><br>
        Lado C: <input name="c"><br><br>
        <button>Calcular</button>
      </form>
    `)
  }

  if (req.method === 'POST') {
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', () => {
      const d = qs.parse(body)

      const area = (d.base * d.altura) / 2

      let tipo = ''
      if (d.a === d.b && d.b === d.c) tipo = 'Equilátero'
      else if (d.a === d.b || d.a === d.c || d.b === d.c) tipo = 'Isósceles'
      else tipo = 'Escaleno'

      res.end(`
        Área: ${area}<br>
        Tipo: ${tipo}<br><br>
        <a href="/">Voltar</a>
      `)
    })
  }

}).listen(3000)