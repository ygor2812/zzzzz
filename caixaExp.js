const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Volume da Caixa</h2>
    <form action="/volume" method="POST">
      Comprimento: <input name="c" type="number" required><br><br>
      Largura: <input name="l" type="number" required><br><br>
      Altura: <input name="a" type="number" required><br><br>
      <button>Calcular</button>
    </form>
  `);
});

app.post('/volume', (req, res) => {
  const c = parseFloat(req.body.c);
  const l = parseFloat(req.body.l);
  const a = parseFloat(req.body.a);

  const volume = c * l * a;

  res.send(`Volume: ${volume}<br><a href="/">Voltar</a>`);
});

app.listen(3000);