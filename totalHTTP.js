const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>Preço de Venda</h2>
      <form method="POST">
        Preço: <input name="p"><br><br>
        Qtd: <input name="q"><br><br>
        Desconto: <input name="d"><br><br>
        <button>Calcular</button>
      </form>
    `);
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', c => body += c.toString());
    req.on('end', () => {
      const d = querystring.parse(body);
      const total = (d.p * d.q) - d.d;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`Total: ${total}`);
    });
  }
}).listen(3000);