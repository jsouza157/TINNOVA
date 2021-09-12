const VeiculoService = require('../../Services/VeiculoService.js');

describe("#cadastrar", () => {
    test('validar marca', async () => {
        const dados = {
            veiculo : "Siena",
            marca : "FORD",
            ano : 2010,
            descricao : "teste",
            vendido : false
        };

        expect(VeiculoService._validarMarca(dados.marca)).toBe(undefined);
    });
});