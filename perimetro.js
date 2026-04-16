const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(`
            <h2>Cálculo do Perímetro</h2>
            <form method="POST" action="/calcular">
                Lado/Base: <input type="number" step="0.01" name="lado" required><br><br>
                Altura: <input type="number" step="0.01" name="altura" required><br><br>
                <button type="submit">Calcular</button>
            </form>
        `)
    }

    else if (req.method === 'POST' && req.url === '/calcular') {
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const dados = querystring.parse(body)

            const lado = parseFloat(dados.lado)
            const altura = parseFloat(dados.altura)

            const perimetro = 2 * (lado + altura)

            let tipo = (lado === altura) ? 'Quadrado' : 'Retângulo'

            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(`
                <h2>Resultado</h2>
                Perímetro: ${perimetro.toFixed(2)}<br>
                Tipo da figura: ${tipo}<br><br>
                <a href="/">Voltar</a>
            `)
        })
    }

})

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})