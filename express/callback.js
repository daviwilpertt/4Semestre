const get = callback => {
    const req = {
        body: {
            nome: 'davi',
            idade: 20
        }
    }
}

const res = {
    json: (texto) => {
        console.log('mensagem de texto', texto)
    }
}