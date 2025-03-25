class Calculadora{
    somar(a, b) {
        return a + b
    }

    subtrair(a, b) {
        return a - b
    }

    multi(a, b) {
        return a * b
    }

    dividir(a, b) {
        if (b === 0) {
            console.log('divisão por 0')
        }
        else {
            return a / b
        }
    }

}

console.log(somar(3, 6))



module.exports = Calculadora