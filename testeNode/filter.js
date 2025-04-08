// const vendas = [1780, 1895, 1900, 2100, 2765, 3910, 1599, 2400]

// const res = vendas.filter(venda => {
//     return venda >= 1900
// })

// console.log('vendas', vendas)
// console.log(res)

// const medias = [
//     { nome: 'joao', nota: 7 },
//     { nome: 'marcos', nota: 5 },
//     { nome: 'maria', nota: 8 },
//     { nome: 'bruno', nota: 10 },
//     { nome: 'kleber', nota: 5 },
//     { nome: 'josue', nota: 6 },
//     { nome: 'julia', nota: 6 },
//     { nome: 'pilar', nota: 10 },
//     { nome: 'robert', nota: 2 },
//     { nome: 'glauber', nota: 6 },
// ]

// const aprovados = medias.filter(media => {
//     return media.nota >= 7
// })

// const reprovados = medias.filter(media => {
//     return media.nota < 7
// })

// console.log('aprovados', aprovados)
// console.log('reprovados', reprovados)

const pacientes = [
    { nome: 'davi', sangue: 'AB', status: 'internado' },
    { nome: 'sergio', sangue: 'A', status: 'internado' },
    { nome: 'gui', sangue: 'B', status: 'alta' },
    { nome: 'ze', sangue: 'O', status: 'internado' },
    { nome: 'helen', sangue: 'B', status: 'internado' },
    { nome: 'mah', sangue: 'B', status: 'internado' },
    { nome: 'fran', sangue: 'A', status: 'internado' },
    { nome: 'micah', sangue: 'O', status: 'observação' },
    { nome: 'mede', sangue: 'O', status: 'internado' },
    { nome: 'saio', sangue: 'A', status: 'internado' },
    { nome: 'ney', sangue: 'AB', status: 'alta' },
    { nome: 'carl', sangue: 'AB', status: 'observação' }
]

const estoque = { A: 2, B: 1, AB: 0, O: 6 }

const pacientesInternados = pacientes.filter(paciente => {
    return paciente.status === 'internado'
})

console.log(pacientesInternados)