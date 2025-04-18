//atividade 1
const numeros = [2, 4, 6, 8]

const dobro = numeros.map(numero => numero * 2)

console.log(dobro)

//atividade 2
const nomes = ['ana', 'bruno', 'carla']

const maiusculo = nomes.map(nome => nome.toLocaleUpperCase())

console.log(maiusculo)

//atividade 3
const produtos = [
    { nome: 'Camiseta', preco: 50 },
    { nome: 'Calça', preco: 80 },
    { nome: 'Tênis', preco: 120 }]

const valorComDesconto = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: produto.preco - (produto.preco * 0.1)
    }
})

console.log(valorComDesconto)