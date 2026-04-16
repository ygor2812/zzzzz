// server.js
const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>Média de Notas</h2>
      <form method="POST">
        N1: <input name="n1"><br><br>
        N2: <input name="n2"><br><br>
        N3: <input name="n3"><br><br>
        <button>Calcular</button>
      </form>
    `);
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      const dados = querystring.parse(body);

      const n1 = parseFloat(dados.n1);
      const n2 = parseFloat(dados.n2);
      const n3 = parseFloat(dados.n3);

      const media = (n1 + n2 + n3) / 3;
      const situacao = media >= 6 ? "Aprovado" : "Reprovado";

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`Média: ${media.toFixed(2)}<br>${situacao}`);
    });
  }
}).listen(3000);