const ValidadorSenha = require("../classes/ValidadorSenha")

describe("Teste ValidadorSenha", () => {
    test("validar senha com sucesso", () => {
        const validador = new ValidadorSenha()
        const senha = "Pro%fess0r";
        const mockValidarSeguranca = jest.spyOn(validador, "verificarSegurancaOnline");
        mockValidarSeguranca.mockReturnValue(true);

        const resultado = validador.validar(senha)

        expect(resultado).toBeTruthy()
    });
    test("validar senha com sucesso", () => {
        const validador = new ValidadorSenha()
        const senha = "Pro%fess0r";
        const mockValidarSeguranca = jest.spyOn(validador, "verificarSegurancaOnline");
        mockValidarSeguranca.mockReturnValue(false);

        const resultado = validador.validar(senha)

        expect(resultado).toBeFalsy()
    });
    test("validar senha com sucesso", () => {
        const validador = new ValidadorSenha()
        const senha = "Pro%fess0r";
        const mockValidarSeguranca = jest.spyOn(validador, "verificarSegurancaOnline");
        mockValidarSeguranca.mockImplementation(() => { 
            throw new Error("Erro ao conectar com validador.")
        });

        expect(() => validador.validar(senha)).toThrow("Erro ao conectar com validador.")

    });
})