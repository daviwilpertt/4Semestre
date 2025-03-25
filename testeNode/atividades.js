//atividade 1
console.log('atividade 1 \n')
function numero(num) {
    if (num === 0) {
        console.log('zero')
    }
    else if (num > 0) {
        console.log('positivo')
    }
    else if (num < 0) {
        console.log('negativo')
    }
}

console.log(numero(0))
console.log(numero(15))
console.log(numero(-69))

//atividade 2

console.log('atividade 2\n')
function diaSemana(dia) {
    switch (dia) {
        case 1: console.log('Domingo')
            break
        case 2: console.log('Segunda')
            break
        case 3: console.log('Terça')
            break
        case 4: console.log('Quarta')
            break
        case 5: console.log('Quinta')
            break
        case 6: console.log('Sexta')
            break
        case 7: console.log('Sabado')
            break
    }
}

console.log(diaSemana(2))
console.log(diaSemana(4))
console.log(diaSemana(7))

//atividade 3
console.log('atividade 3\n')

function tabuada(num) {
    for (let i = 1; i <= 10; i++){
        console.log(`${num} x 1 = ${num * i}`)
    }
}
console.log(tabuada(2))

//atividade 4
console.log('atividade 4\n')

function regresso(num) {
    for (let i = num; i >= 0; i--){
        console.log(i)
    }
}

console.log(regresso(10))

//atividade 5
console.log('atividade 5\n')

function pegarVogal(frase) {
    const vogais = 'aeiouAEIOU'
    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            contador++
        }
    }
    return contador
}

let msg = 'ola queride'
console.log(`nessa frase tem ${pegarVogal(msg)} vogais`)

//atividade 6
console.log('atividade 6\n')

function calcMedia(medias) {
    let array = []

    medias.forEach(media => {
        if (media >= 7) {
            array.push('aprovado')
        }
        else if (media < 7 && media >= 5) {
            array.push('recuperação')
        }
        else {
            array.push('reprovado')
        }
    })

    return array
}

let mediasAulos = [5, 7, 4.9]
let resultado = calcMedia(mediasAulos)
console.log(resultado)
