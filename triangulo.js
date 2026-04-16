const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
    <h2>Triângulo</h2>
    <form method="POST" action="/calcular">
      Base: <input name="base" type="number" step="0.01" required><br><br>
      Altura: <input name="altura" type="number" step="0.01" required><br><br>
      Lado A: <input name="a" type="number" step="0.01" required><br><br>
      Lado B: <input name="b" type="number" step="0.01" required><br><br>
      Lado C: <input name="c" type="number" step="0.01" required><br><br>
      <button>Calcular</button>
    </form>
  `)
})

app.post('/calcular', (req, res) => {
  const { base, altura, a, b, c } = req.body

  const area = (parseFloat(base) * parseFloat(altura)) / 2

  let tipo = ''
  if (a === b && b === c) tipo = 'Equilátero'
  else if (a === b || a === c || b === c) tipo = 'Isósceles'
  else tipo = 'Escaleno'

  res.send(`
    <h2>Resultado</h2>
    Área: ${area.toFixed(2)}<br>
    Tipo: ${tipo}<br><br>
    <a href="/">Voltar</a>
  `)
})

app.listen(3000, () => console.log('http://localhost:3000'))