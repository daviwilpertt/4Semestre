const pedidos = [
    { cliente: "Ana", valor: 150.00, tipo: "cartao" },
    { cliente: "Bruno", valor: 89.90, tipo: "boleto" },
    { cliente: "Carla", valor: 120.00, tipo: "pix" },
    { cliente: "Diego", valor: 250.00, tipo: "cripto" },
    { cliente: "Erica", valor: 45.00, tipo: "cartao" },
];

const filtrar = pedidos.filter(pedido => {
    return pedido.valor > 100
})

console.log('cliente com valor maior que 100:', filtrar)

const pedidosPreparados = pedidos.map((pedido, index) => {
    return {
        ...pedido,
        id: index + 1,
        status: "pendente"
    };
});

console.log(pedidosPreparados)

pedidosPreparados.forEach(pedido => {
    switch (pedido.tipo) {
        case "cartao":
            console.log(`pegando maquininha para ${pedido.cliente} no valor ${pedido.valor.toFixed(2)}`)
            break;
        case "boleto":
            console.log(`gerando boleto para ${pedido.cliente} no valor ${pedido.valor}`)
            break;
        case "pix":
            console.log(`gerando pix copia e cola para ${pedido.cliente} no valor ${pedido.valor}`)
            break;
        case "cripto":
            console.log(`abrindo carteira cripto para ${pedido.cliente} no valor ${pedido.valor}`)
            break;
        default:
            console.log(`Tipo de pagamento inválido para ${pedido.cliente}`);
    }
});

const processaPedidos = (pedidos) => {
    return pedidos.map(pedido => {
        const callback = processaTipoPagamento(pedido.tipo);

        return {
            ...pedido,
            callback
        };
    })
}

const finalizaPedidos = (pedidos) => {
    pedidos.forEach(pedido => {
        pedido.callback(pedido);
    })
}

const pedidosFiltrados = filtrarPedidos(pedidos);

const pedidosProcessados = processaPedidos(pedidosFiltrados);

finalizaPedidos(pedidosProcessados)


console.log("pedidos", pedidos);
