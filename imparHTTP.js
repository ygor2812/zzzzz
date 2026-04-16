const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>Par ou Ímpar</h2>
      <form method="POST">
        Número: <input name="n"><br><br>
        <button>Verificar</button>
      </form>
    `);
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', c => body += c.toString());
    req.on('end', () => {
      const d = querystring.parse(body);
      const tipo = d.n % 2 === 0 ? "Par" : "Ímpar";

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`Resultado: ${tipo}`);
    });
  }
}).listen(3000);