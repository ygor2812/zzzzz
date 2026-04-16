const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Par ou Ímpar</h2>
    <form action="/tipo" method="POST">
      Número: <input name="n" type="number" required><br><br>
      <button>Verificar</button>
    </form>
  `);
});

app.post('/tipo', (req, res) => {
  const n = parseInt(req.body.n);
  const tipo = n % 2 === 0 ? "Par" : "Ímpar";

  res.send(`O número é: ${tipo}<br><a href="/">Voltar</a>`);
});

app.listen(3000);