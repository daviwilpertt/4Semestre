const ContaCorrente = require('./classes/ContaCorrente');

describe('ContaCorrente', () => {
    let contaMaria, contaJose;

    beforeEach(() => {
        contaMaria = new ContaCorrente("Maria", 200);
        contaJose = new ContaCorrente("José", 100);
    });

    test('Verificar se as contas foram criadas corretamente', () => {
        expect(contaMaria).toBeTruthy();
        expect(contaJose).toBeTruthy();
    });

    test('Saldos das contas são diferentes', () => {
        expect(contaMaria.balanco).not.toBe(contaJose.balanco);
    });

    test('Após saque de R$100 na conta da Maria, saldos devem ser iguais', () => {
        contaMaria.sacar(100);
        expect(contaMaria.balanco).toBe(contaJose.balanco);
    });

    test('Após depósito de R$50 na conta do José, o saldo de José deve ser igual ao de Maria menos R$50', () => {
        contaJose.depositar(50);
        expect(contaJose.balanco).toBe(contaMaria.balanco - 50);
    });

    test('Saque maior que o saldo disponível deve retornar false', () => {
        expect(contaMaria.sacar(200)).toBe(true);
    });

    test('Saque dentro do saldo disponível deve retornar true', () => {
        expect(contaMaria.sacar(50)).toBe(true);
    });
});
