const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {

  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`
      <h2>Média</h2>
      <form method="POST">
        N1: <input name="n1"><br><br>
        N2: <input name="n2"><br><br>
        N3: <input name="n3"><br><br>
        N4: <input name="n4"><br><br>
        <button>Calcular</button>
      </form>
    `)
  }

  if (req.method === 'POST') {
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', () => {
      const d = qs.parse(body)

      const notas = [d.n1, d.n2, d.n3, d.n4].map(Number)
      const media = notas.reduce((a,b)=>a+b,0)/notas.length

      let sit = media>=7?'Aprovado':media>=5?'Recuperação':'Reprovado'

      res.end(`
        Média: ${media}<br>
        Situação: ${sit}<br><br>
        <a href="/">Voltar</a>
      `)
    })
  }

}).listen(3000)