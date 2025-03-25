const Calculadora = require("./classes/Calculadora")

describe('teste da calculadora', () => {

    test('deve somar dois números', () => {
        //given - dado
        calc = new Calculadora()
        //when - quando
        res = calc.somar(2, 3)
        //then - então 
        expect(res).toBe(5)
    })

    test('deve subtrair dois número', () => {
        calc = new Calculadora()

        res = calc.subtrair(5, 3)

        expect(res).toBe(2)
    })

    test('deve multiplicar dois número', () => {
        calc = new Calculadora()

        res = calc.multiplicar(8, 8)

        expect(res).toBe(64)
    })

    test('deve dividir dois número', () => {
        calc = new Calculadora()

        res = calc.dividir(1000, 2)

        expect(res).toBe(500)
    })

})
