//atividade 1
const frutas = ['banana', 'maçã', 'uva']

frutas.forEach((fruta, index) => {
    console.log( index + 1 ,'fruta: ', fruta)
})

//atividade 2
const numeros = [10, 20, 30]

let total =0 
numeros.forEach((numero) => {
    total += numero
})

console.log(total)

//atividade 3
const vendas = [
    { cliente: 'João', valor: 80 },
    { cliente: 'Maria', valor: 150 },
    { cliente: 'Pedro', valor: 120 }
]

vendas.forEach((venda, index) => {
    console.log(`Obrigado pela compra, ${venda.cliente}! Você gastou R$${venda.valor.toFixed(2)}.`)
})