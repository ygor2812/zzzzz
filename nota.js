const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
    <h2>Média de Notas</h2>
    <form method="POST" action="/media">
      Nota 1: <input name="n1" type="number" step="0.01" required><br><br>
      Nota 2: <input name="n2" type="number" step="0.01" required><br><br>
      Nota 3: <input name="n3" type="number" step="0.01" required><br><br>
      Nota 4: <input name="n4" type="number" step="0.01"><br><br>
      <button>Calcular</button>
    </form>
  `)
})

app.post('/media', (req, res) => {
  const notas = [req.body.n1, req.body.n2, req.body.n3, req.body.n4]
    .filter(n => n !== '')
    .map(Number)

  const media = notas.reduce((a, b) => a + b, 0) / notas.length

  let situacao = ''
  if (media >= 7) situacao = 'Aprovado'
  else if (media >= 5) situacao = 'Recuperação'
  else situacao = 'Reprovado'

  res.send(`
    <h2>Resultado</h2>
    Média: ${media.toFixed(2)}<br>
    Situação: ${situacao}<br><br>
    <a href="/">Voltar</a>
  `)
})

app.listen(3000, () => console.log('http://localhost:3000'))