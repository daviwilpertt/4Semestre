const GerenciadorImoveis = require("../classes/GerenciadorImoveis");

describe('Gerenciador de Imóveis - Testes com jest.spyOn', () => {

    let gerenciador
    let mockBuscarEndereco, spyEnviarNotificacao

    beforeEach(() => {
        gerenciador = new GerenciadorImoveis();

        mockBuscarEndereco = jest.spyOn(gerenciador, 'buscarEnderecoPorCep')
        spyEnviarNotificacao = jest.spyOn(gerenciador, 'enviarNotificacao')
    })


    test('Imóvel adicionado com sucesso e notificação enviada', async () => {
        const imovel = {
            cep: '88000-000',
            bairro: 'Trindade',
            preco: 1500,
            status: 'disponível',
            proprietarioId: 'token123'
        }

        mockBuscarEndereco.mockResolvedValue({
            logradouro: 'Rua das Flores',
            bairro: 'Trindade',
            localidade: 'Florianópolis',
            uf: 'SC'
        })

        const resultado = await gerenciador.adicionarImovel(imovel)

        expect(mockBuscarEndereco).toHaveBeenCalledWith('88000-000')
        expect(spyEnviarNotificacao).toHaveBeenCalledTimes(1)
        expect(resultado.endereco).toBe('Rua das Flores, Trindade - Florianópolis/SC')
        expect(gerenciador.imoveis.length).toBe(1)
  
    })

    test('Erro na API de CEP (falha de rede)', async () => {
        const imovel = {
            cep: '88000-000',
            bairro: 'Trindade',
            preco: 1500,
            status: 'disponível',
            proprietarioId: 'token123'
        };

        mockBuscarEndereco.mockRejectedValue(new Error('Falha de rede'));

        try {
            await gerenciador.adicionarImovel(imovel); 
        } catch (error) {
            expect(spyEnviarNotificacao).not.toHaveBeenCalled()
            expect(error.message).toBe('Falha de rede')
        }
    })

    test('retorna endereço vazio', async () => {
        const imovel = {
            cep: '88000-000',
            bairro: 'Trindade',
            preco: 1500,
            status: 'disponível',
            proprietarioId: 'token123'
        }

        mockBuscarEndereco.mockResolvedValue(null)

        try {
            await gerenciador.adicionarImovel(imovel)
        } catch (error) {
            expect(spyEnviarNotificacao).not.toHaveBeenCalled()
            expect(error.message).toBe('Endereço não encontrado para o CEP informado.')
        }
    })
})