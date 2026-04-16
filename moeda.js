const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
    <h2>Conversor de Moeda (Real → Dólar)</h2>
    <form method="POST" action="/converter">
      Valor em Real: <input name="real" type="number" step="0.01" required><br><br>
      Cotação do Dólar: <input name="cotacao" type="number" step="0.01" required><br><br>
      <button>Converter</button>
    </form>
  `)
})

app.post('/converter', (req, res) => {
  const real = parseFloat(req.body.real)
  const cotacao = parseFloat(req.body.cotacao)

  const dolar = real / cotacao

  res.send(`
    <h2>Resultado</h2>
    Em dólar: $ ${dolar.toFixed(2)}<br><br>
    <a href="/">Voltar</a>
  `)
})

app.listen(3000, () => console.log('http://localhost:3000'))