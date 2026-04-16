const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
    <h2>Conversor de Temperatura</h2>
    <form method="POST" action="/converter">
      Celsius: <input name="c" type="number" step="0.01" required><br><br>
      <button>Converter</button>
    </form>
  `)
})

app.post('/converter', (req, res) => {
  const c = parseFloat(req.body.c)

  const f = (c * 9/5) + 32
  const k = c + 273.15

  res.send(`
    <h2>Resultado</h2>
    Fahrenheit: ${f.toFixed(2)}<br>
    Kelvin: ${k.toFixed(2)}<br><br>
    <a href="/">Voltar</a>
  `)
})

app.listen(3000, () => console.log('http://localhost:3000'))