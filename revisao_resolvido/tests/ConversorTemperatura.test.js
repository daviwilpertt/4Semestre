const ConversorTemperatura = require("../classes/ConversorTemperatura")

describe("Teste ConversorTemperatura", () => {
    test("verificarTemperatura com sucesso", () => {
        const conversor = new ConversorTemperatura();
        const latitude = 80;
        const longitude = 110;

        const mock = jest.spyOn(conversor, "obterTemperaturaPorLocalizacao");
        mock.mockReturnValue(25);

        const resultado = conversor.verificarTemperatura(latitude, longitude);

        expect(resultado.fahrenheit).toBe(77)
        expect(resultado.celsius).toBe(25)
    });

    test("verificarTemperatura com falha", () => {
        const conversor = new ConversorTemperatura();
        const latitude = 80;
        const longitude = 110;

        const mock = jest.spyOn(conversor, "obterTemperaturaPorLocalizacao");
        mock.mockImplementation(() => { throw new Error("Localidade não encontrada.")});

        expect(()=>conversor.verificarTemperatura(latitude, longitude)).toThrow("Localidade não encontrada.");
    });
})