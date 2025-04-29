import express from 'express'

const app = express()

app.use(express.json());

let alunos = [{ id: 1, nome: 'davi', matricula: 18, status: 'ativo' }]
let notas = []

app.get('/alunos', (req, res) => {
    res.json(alunos);
});

app.post('/alunos/', (req, res) => {
    const { nome, matricula, status } = req.body
    const numId = alunos.map(aluno => {
        return aluno.id
    })
    let id = Math.max(...numId) + 1

    alunos.push({
        id,
        nome,
        matricula,
        status
    })

    res.json({
        mensagem: 'dados recebidos',
        body: { nome, matricula, status }
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.post('alunos/:matricula/notas', (req, res) => {
    const notas = req.body
    
})