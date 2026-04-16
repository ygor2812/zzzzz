//npm init -y
//npm install express
//node nome.js
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Média de Notas</h2>
    <form action="/media" method="POST">
      Nota 1: <input name="n1" type="number" step="0.01" required><br><br>
      Nota 2: <input name="n2" type="number" step="0.01" required><br><br>
      Nota 3: <input name="n3" type="number" step="0.01" required><br><br>
      <button>Calcular</button>
    </form>
  `);
});

app.post('/media', (req, res) => {
  const n1 = parseFloat(req.body.n1);
  const n2 = parseFloat(req.body.n2);
  const n3 = parseFloat(req.body.n3);

  const media = (n1 + n2 + n3) / 3;
  const situacao = media >= 6 ? "Aprovado" : "Reprovado";

  res.send(`Média: ${media.toFixed(2)}<br>Situação: ${situacao}<br><a href="/">Voltar</a>`);
});

app.listen(3001);