const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Perímetro</h2>
    <form action="/peri" method="POST">
      Base: <input name="b" type="number" required><br><br>
      Altura: <input name="a" type="number" required><br><br>
      <button>Calcular</button>
    </form>
  `);
});

app.post('/peri', (req, res) => {
  const b = parseFloat(req.body.b);
  const a = parseFloat(req.body.a);

  const perimetro = 2 * (b + a);

  res.send(`Perímetro: ${perimetro}<br><a href="/">Voltar</a>`);
});

app.listen(3000);