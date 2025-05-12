import express from "express";

const app = express()

app.use(express.json())

let alunos = [
    { id: 1, nome: 'Davi', matricula: 18, status: 'ativo', notas: [7.5, 8.0, 6.5, 9.0] }
]

//BUSCAR ALUNOS
app.get('/alunos', (req, res) => {
    res.json(alunos)
})

//BUSCAR ALUNOS COM MÉDIA
app.get('/alunos/notas', (req, res) => {
    const alunosAtivosComNotas = [];

    for (let matricula in alunos) {
        const aluno = alunos[matricula]
        
        if (aluno.status === 'ativo' && aluno.notas && aluno.notas.length === 4) {
            const media = aluno.notas.reduce((num, nota) => num + nota, 0) / aluno.notas.length

            let situacao = '';
            if (media >= 7) {
                situacao = 'aprovado';
            } else if (media >= 5) {
                situacao = 'recuperação';
            } else {
                situacao = 'reprovado';
            }

            alunosAtivosComNotas.push({
                nome: aluno.nome,
                matricula: aluno.matricula,
                notas: aluno.notas,
                media: media,
                situacao: situacao
            });
        }
    }

    return res.status(200).json(alunosAtivosComNotas);
})


//CRIAR ALUNO
app.post('/alunos', (req, res) => {
    const { nome, matricula, status } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: "O campo 'nome' é obrigatório." });
    }
    if (!matricula) {
        return res.status(400).json({ erro: "O campo 'matricula' é obrigatório." });
    }
    if (!status) {
        return res.status(400).json({ erro: "O campo 'status' é obrigatório." });
    }

    if (nome.length < 3) {
        return res.status(400).json({ erro: "O nome deve conter pelo menos 3 caracteres." });
    }

    const statusValidado = status.toLowerCase();

    if (statusValidado !== 'ativo' && statusValidado !== 'inativo') {
        return res.status(400).json({ erro: "O campo 'status' deve ser 'ativo' ou 'inativo'." });
    }

    const matriculaValidada = matricula.toLowerCase();

    if (alunos[matriculaValidada]) {
        return res.status(409).json({ erro: "Já existe um aluno com essa matrícula." });
    }

    alunos[matriculaValidada] = {
        nome,
        matricula: matriculaValidada,
        status: statusValidado,
        dataCriacao: new Date().toISOString(),
        notas: null,
        dataUltimaAtualizacao: null
    }

    return res.status(201).json({ mensagem: "Aluno cadastrado com sucesso." });
})

//CRIAR NOTAS
app.post('/alunos/:matricula/notas', (req, res) => {
    const matricula = req.params.matricula.toLowerCase();
    const { notas } = req.body
    const aluno = alunos[matricula];


    if (!aluno) {
        return res.status(404).json({ erro: "Aluno não encontrado." });
    }

    if (!Array.isArray(notas) || notas.length !== 4 || !notas.every(n => typeof n === 'number')) {
        return res.status(400).json({
            erro: 'O campo "notas" deve ser um array contendo exatamente 4 números.'
        })
    }

    if (!aluno) {
        return res.status(404).json({
            erro: 'Aluno não encontrado com a matrícula fornecida.'
        })
    }

    if (aluno.status !== 'ativo') {
        return res.status(403).json({ erro: "Não é possível cadastrar notas para alunos inativos." });
    }

    if (!Array.isArray(notas) || notas.length !== 4) {
        return res.status(400).json({ erro: "Devem ser fornecidas exatamente 4 notas." });
    }

    if (!notas.every(nota => typeof nota === 'number' && nota >= 0 && nota <= 10)) {
        return res.status(400).json({ erro: "As notas devem estar entre 0 e 10." });
    }


    aluno.notas = notas
    aluno.dataUltimaAtualizacao = new Date().toISOString()
    


    return res.status(200).json({
        mensagem: 'Notas cadastradas/atualizadas com sucesso.',
    })
})

//DELETAR ALUNO
app.delete('/alunos/:matricula', (req, res) => {
    const matricula = req.params.matricula.toLowerCase()

    if (!alunos[matricula]) {
        return res.status(404).json({ erro: "Aluno não encontrado." })
    }

    delete alunos[matricula]

    return res.status(200).json({ mensagem: "Aluno removido com sucesso." })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})