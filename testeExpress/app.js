import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const itens = [
    {id: 1, nome: '', marca: '', preco: },
    {id: 2, nome: '', marca: '', preco: },
    {id: 3, nome: '', marca: '', preco: }
]

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataPath = path.join(__dirname, 'data.js')

const carregarDados = async () => {

}
app.use(express.json())

app.get('/items', (req, res) => {
    res.json({mensagem:'bem vindo'})
})

app.post('/items', (req, res) => {
    const [nome, marca, preco]

    res.json({mensagem: })
})