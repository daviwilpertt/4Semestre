import express from 'express'

const app = express()
app.use(express.json())

let alunos = [
    { id: 1, nome: 'Davi', matricula: 18, status: 'ativo', notas: [7.5, 8.0, 6.5, 9.0] }
]

function calcularMedia(notas) {
    const soma = notas.reduce((num, nota) => num + nota, 0)
    return soma / notas.length
}

app.get('/alunos', (req, res) => {
    res.json(alunos)
})

app.post('/alunos/', (req, res) => {
    const { nome, matricula, status } = req.body

    if (status !== 'ativo' && status !== 'inativo') {
        return res.status(400).json({
            mensagem: 'Status incorreto. Use "ativo" ou "inativo".'
        });
    }

    const numId = alunos.map(aluno => aluno.id)
    const id = Math.max(...numId) + 1;

    if (alunos.some(aluno => aluno.matricula === matricula)) {
        return res.status(400).json({
            mensagem: 'Matrícula já cadastrada.'
        });
    }

    alunos.push({
        id,
        nome,
        matricula,
        status,
        notas: [] 
    });

    res.status(201).json({
        mensagem: 'Aluno cadastrado com sucesso!',
        aluno: { nome, matricula, status }
    })
})

app.get('/alunos/notas', (req, res) => {
    const alunosComMedia = alunos.map(aluno => ({
        nome: aluno.nome,
        notas: aluno.notas,
        media: calcularMedia(aluno.notas)
    }))
    res.json(alunosComMedia)
})

app.post('/alunos/:matricula/notas', (req, res) => {
    const { matricula } = req.params
    const { notas } = req.body

    if (!Array.isArray(notas) || notas.length !== 4 || !notas.every(n => typeof n === 'number')) {
        return res.status(400).json({
            erro: 'O campo "notas" deve ser um array contendo exatamente 4 números.'
        })
    }

    const aluno = alunos.find(a => a.matricula === parseInt(matricula))

    if (!aluno) {
        return res.status(404).json({
            erro: 'Aluno não encontrado com a matrícula fornecida.'
        })
    }

  
    aluno.notas = notas

    return res.status(200).json({
        mensagem: 'Notas cadastradas/atualizadas com sucesso.',
        aluno: {
            matricula: aluno.matricula,
            notas: aluno.notas,
            media: calcularMedia(aluno.notas)
        }
    })
})

app.delete('/alunos/:matricula', (req, res) => {
    const matricula = parseInt(req.params.matricula)

    const alunoIndex = alunos.findIndex(a => a.matricula === matricula)

    if (alunoIndex === -1) {
        return res.status(404).json({
            erro: 'Aluno não encontrado com a matrícula fornecida.'
        })
    }

    alunos.splice(alunoIndex, 1)

    return res.status(200).json({
        mensagem: `Aluno com matrícula ${matricula} removido com sucesso.`
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
