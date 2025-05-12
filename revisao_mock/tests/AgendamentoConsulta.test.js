const AgendamentoConsulta = require("../classes/AgendamentoConsulta")

describe('teste de agendamento de consulta', () => {
    test('CRM válida', () => {
        const agendamento = new AgendamentoConsulta()
        let crm = '12345'
        let paciente = 'robs'
        let proxAno = new Date().getFullYear + 1
        let data = `${proxAno}-05-05`
        let mockValido = jest.spyOn(AgendamentoConsulta, 'validaMedico')
        mockValido.mockReturnValue(true)

        agendamento.agendarConsulta(crm, paciente, data)
        const listaConsultas = agendamento.listarConsultas()

        expect(listaConsultas.length()).toBe(1)
        expect(mockValido).toHaveCalledWidth(crm)

    })

})