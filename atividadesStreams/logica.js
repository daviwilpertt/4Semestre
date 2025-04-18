const funcionarios = [
    { nome: 'João', idade: 30, salario: 5000, ativo: true },
    { nome: 'Ana', idade: 22, salario: 3200, ativo: false },
    { nome: 'Carlos', idade: 28, salario: 4000, ativo: true },
    { nome: 'Marina', idade: 35, salario: 6000, ativo: false },
    { nome: 'Fernanda', idade: 25, salario: 3800, ativo: true }
];

const funcionariosAtivos = funcionarios.filter(funcionario => funcionario.ativo == true)

const aplicarBonus = funcionariosAtivos.map(funcionarioAtivo => {
    let bonus = funcionarioAtivo.salario + (funcionarioAtivo.salario * 0.1)
    return funcionarioAtivo.novoSalario = bonus
})

funcionariosAtivos.forEach(funcionarioAtivo => {
    console.log(`Parabéns, ${funcionarioAtivo.nome}! Seu novo salário com bônus é R$${funcionarioAtivo.novoSalario}`)
})

//extra

const produtos = [
    { nome: 'Arroz', categoria: 'Alimento', preco: 25, estoque: 5 },
    { nome: 'Feijão', categoria: 'Alimento', preco: 10, estoque: 15 },
    { nome: 'Sabonete', categoria: 'Higiene', preco: 3, estoque: 8 },
    { nome: 'Detergente', categoria: 'Limpeza', preco: 4, estoque: 3 },
    { nome: 'Papel Higiênico', categoria: 'Higiene', preco: 12, estoque: 20 }
];
  
produtos.filter(
    produto => produto.estoque < 10
).map(
    produto => ({
        nome: produto.nome,
        novoPreco: produto.preco * 0.85
    })
).forEach(produto => {
    console.log(`Estoque baixo: Produto ${produto.nome} - Novo Preço: R${produto.novoPreco}`)
})