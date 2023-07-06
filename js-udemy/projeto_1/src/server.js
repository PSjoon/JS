const port = 3003

import express from 'express'
const app = express()
import { getProduto, salvarProduto } from './dataBase'
import { urlencoded } from 'body-parser'

app.get(urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(getProduto())
})

app.get('./produtos/:id', (req, res, next) => {
    res.send(getProduto(req.params.id))

})

app.post('./produtos', (req, res, next) => {
    const produto = salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(port, () => { console.log("foiii") })
