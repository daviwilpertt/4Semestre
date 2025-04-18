//atividade 1
const idades = [12, 18, 21, 14, 30];

console.log(idades.filter(idade => idade > 18))

//atividade 2
const nomes = ['Ana', 'Bruno', 'Amanda', 'Carlos']

console.log(nomes.filter(nome => nome[0] == 'A'))

//atividade 3
const produtos = [
    { nome: 'Notebook', preco: 3000, disponivel: true },
    { nome: 'Mouse', preco: 50, disponivel: true },
    { nome: 'Teclado', preco: 150, disponivel: false },
    { nome: 'Monitor', preco: 500, disponivel: true }
];
  
const disponivel = produtos.filter(produto => {
    if (produto.disponivel == true) {
        return produto.preco > 100
    }
})

console.log(disponivel)