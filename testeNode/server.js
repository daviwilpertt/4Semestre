import fastify from "fastify";

const servidor = fastify()

servidor.get('/', () => {
    return `você é vhhhhhhhocê `
})

servidor.get('/davi', (req, rep) => {
    const nome = req.body

    return `você é ${nome} `
})



servidor.listen({
    port: 3000
})