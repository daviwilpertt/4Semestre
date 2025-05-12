const GerenciadorImoveis = require("../classes/GerenciadorImoveis");

describe('Gerenciador de Imóveis - Teste sem mock', () => {

    let gerenciador

    beforeEach(() => {
        gerenciador = new GerenciadorImoveis();
    })

    test('Deve adicionar um imóvel válido', () => {
        const imovel = {
            endereco: 'Rua das Flores, 123',
            bairro: 'Centro',
            preco: 1200,
            status: 'disponível'
        }

        gerenciador.adicionarImovel(imovel)

        expect(gerenciador.listarImoveis()).toContain(imovel)
    })

    test('Deve lançar erro ao adicionar imóvel com endereço inválido', () => {
        const imovel = {
            endereco: '',
            bairro: 'Centro',
            preco: 1200,
            status: 'disponível'
        }

        expect(() => gerenciador.adicionarImovel(imovel)).toThrow("Endereço inválido.")
    })

    test('Deve lançar erro ao adicionar imóvel com preço inválido', () => {
        const imovel = {
            endereco: 'Rua A',
            bairro: 'Centro',
            preco: -500,
            status: 'disponível'
        }

        expect(() => gerenciador.adicionarImovel(imovel)).toThrow("Preço inválido.")
    })

    test('Deve retornar imóveis de um bairro específico (Centro)', () => {
        const imovel1 = {
            endereco: 'Rua A',
            bairro: 'Centro',
            preco: 1000,
            status: 'disponível'
        }
        
        const imovel2 = {
            endereco: 'Rua B',
            bairro: 'Trindade',
            preco: 1100,
            status: 'disponível'
        }
        gerenciador.adicionarImovel(imovel1)
        gerenciador.adicionarImovel(imovel2)

        const resultado = gerenciador.buscarImoveisPorBairro('Centro')

        expect(resultado).toEqual([imovel1])
    })

    test('Deve retornar apenas imóveis com status "disponível"', () => {
        const imovel1 = {
            endereco: 'Rua C',
            bairro: 'Ingleses',
            preco: 800,
            status: 'disponível'

        }

        const imovel2 = {
            endereco: 'Rua D',
            bairro: 'Ingleses',
            preco: 700,
            status: 'indisponível'
        }

        gerenciador.adicionarImovel(imovel1)
        gerenciador.adicionarImovel(imovel2)

        const disponiveis = gerenciador.listarImoveisDisponiveis()

        expect(disponiveis).toEqual([imovel1])
    })

})