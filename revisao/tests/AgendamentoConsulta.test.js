const AgendamentoConsulta = require("../classes/AgendamentoConsulta")

describe('testes de agendamento de consulta', () => {
    test('retorna data válida', () => {
        let agendamentoConsulta = new AgendamentoConsulta()
        let dataValida = '2025-04-28'

        const resultado = agendamentoConsulta.dataValida(dataValida)

        expect(resultado).toBe(true)
    })


    test('retorna data inválida', () => {
        let agendamentoConsulta = new AgendamentoConsulta()
        let dataInvalida = '2025-04-280'

        const resultado = agendamentoConsulta.dataInvalida(dataInvalida)

        expect(resultado).toBe(true)
    })


    test('retorno data da fatura', () => {
        let agendamentoConsulta = new AgendamentoConsulta()
        let data = '2025-05-01'

        const resultado = agendamentoConsulta.dataFutura(data)

        expect(resultado).toBe(true)
    })

    
    test('retorna agendar consulta', () => {
        const agendamentoConsulta = new AgendamentoConsulta()
        const ano = new Date().getFullYear()
        const data = `${ano + 1}-05-01`
        const paciente = ' davi'
        
        agendamentoConsulta.agendarConsulta(paciente, data)
    })
})