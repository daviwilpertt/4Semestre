const GeometriaService = require('./classes/GeometriaService');

describe('GeometriaService', () => {
    test('Deve calcular a área do triângulo corretamente', () => {
        const resultado = GeometriaService.areaTriangulo(2.0, 2.0);
        expect(resultado).toBe(2.0);
    });

    test('Deve calcular a área da circunferência corretamente (precisão de 0.1)', () => {
        const resultado = GeometriaService.areaCircunferencia(2.0);
        expect(resultado).toBeCloseTo(12.6, 1);
    });

    test('Deve calcular a área do quadrado corretamente', () => {
        const resultado = GeometriaService.areaQuadrado(2.0);
        expect(resultado).toBe(4.0);
    });

    test('Deve calcular a área do retângulo corretamente', () => {
        const resultado = GeometriaService.areaRetangulo(2.0, 3.0);
        expect(resultado).toBe(6.0);
    });

    test('Deve calcular o volume do cubo corretamente', () => {
        const resultado = GeometriaService.volumeCubo(2.0);
        expect(resultado).toBe(8.0);
    });

    test('Deve calcular o volume do cilindro corretamente (precisão de 0.1)', () => {
        const resultado = GeometriaService.volumeCilindro(2.0, 2.0);
        expect(resultado).toBeCloseTo(25.1, 1);
    });

    test('Deve calcular o volume da esfera corretamente (precisão de 0.1)', () => {
        const resultado = GeometriaService.volumeEsfera(2.0);
        expect(resultado).toBeCloseTo(33.5, 1);
    });
});
