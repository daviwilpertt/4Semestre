const CadastroPet = require("../classes/CadastroPets")

describe("Testes de Cadastro de Pets", () => {
    test("Valida cadastro com sucesso", () => {
        //GIVEN
        const pet = {
            nome: "Rex",
            idade: 2,
            tipo: "cachorro"
        }
        const cadastroPet = new CadastroPet();

        const mockValidaVacinacao = jest.spyOn(cadastroPet, "validarVacinacao");
        mockValidaVacinacao.mockReturnValue(true);

        //WHEN
        const resultado = cadastroPet.validarCadastro(pet);

        //THEN
        expect(resultado).toBeTruthy()
    })
    test("Valida cadastro com falha", () => {
        //GIVEN
        const pet = {
            nome: "Rex",
            idade: 2,
            tipo: "cachorro"
        }
        const cadastroPet = new CadastroPet();

        const mockValidaVacinacao = jest.spyOn(cadastroPet, "validarVacinacao");
        mockValidaVacinacao.mockReturnValue(false);

        //WHEN
        const resultado = cadastroPet.validarCadastro(pet);

        //THEN
        expect(resultado).toBeFalsy();
    })
    test("Valida cadastro com erro ao validar vacinação", () => {
        //GIVEN
        const pet = {
            nome: "Rex",
            idade: 2,
            tipo: "cachorro"
        }
        const cadastroPet = new CadastroPet();

        const mockValidaVacinacao = jest.spyOn(cadastroPet, "validarVacinacao");
        const spyValidarIdade = jest.spyOn(cadastroPet, "validarIdade");
        
        mockValidaVacinacao.mockImplementation(() => {throw new Error("Erro ao validar vacinação.")});

        //WHEN + THEN
        expect(() => cadastroPet.validarCadastro(pet)).toThrow("Erro ao validar vacinação.");
        expect(spyValidarIdade).toHaveBeenCalledTimes(1);
    })
})