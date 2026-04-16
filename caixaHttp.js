const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>Volume</h2>
      <form method="POST">
        C: <input name="c"><br><br>
        L: <input name="l"><br><br>
        A: <input name="a"><br><br>
        <button>Calcular</button>
      </form>
    `);
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      const d = querystring.parse(body);
      const volume = d.c * d.l * d.a;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`Volume: ${volume}`);
    });
  }
}).listen(3000);