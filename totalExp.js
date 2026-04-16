const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Preço de Venda</h2>
    <form action="/preco" method="POST">
      Preço: <input name="p" type="number" step="0.01" required><br><br>
      Quantidade: <input name="q" type="number" required><br><br>
      Desconto: <input name="d" type="number" step="0.01" required><br><br>
      <button>Calcular</button>
    </form>
  `);
});

app.post('/preco', (req, res) => {
  const p = parseFloat(req.body.p);
  const q = parseFloat(req.body.q);
  const d = parseFloat(req.body.d);

  const total = (p * q) - d;

  res.send(`Total: ${total.toFixed(2)}<br><a href="/">Voltar</a>`);
});

app.listen(3000);