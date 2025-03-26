const ContaCorrente = require('./classes/ContaCorrente')

describe('teste da conta corrente', () => {

    test('deve criar duas contas', () => {
        conta1 = new ContaCorrente()
        conta1.nome('maria')
        conta1.balancoInicial(200)

       const conta2 = new ContaCorrente()
        conta2.nome('joao')
        conta2.balancoInicial(100)

        expect(conta1.nome).toBe('maria');
        expect(conta1.balancoInicial).toBe(200);
        expect(conta2.nome).toBe('joao');
        expect(conta2.balancoInicial).toBe(100);
        
    })

})
