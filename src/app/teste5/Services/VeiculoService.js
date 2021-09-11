const sequelize = require('../config/database.js');
const Veiculo = require('../models/Veiculo.js');

class VeiculoService {
    async cadastrar(dados) {
        const novoVeiculo = await Veiculo.create(dados);
        return novoVeiculo;
    }

    async listar() {
        const veiculos = await Veiculo.findAll();
        return veiculos;
    }

    async atualizar(id, veiculo, marca, ano) {
        const veiculoAtualizado = await Veiculo.findByPk(id);

        if(!!veiculoAtualizado === false)
            throw new Error('Não encontramos um veiculo com este identificador.');

        veiculoAtualizado.update({
            'veiculo' : veiculo,
            'marca' : marca,
            'ano' : ano
        })
        return veiculoAtualizado;
    }

    async excluir(id)
    {
        const veiculo = await Veiculo.findByPk(id);

        if(!!veiculoAtualizado === false)
            throw new Error('Não encontramos um veiculo com este identificador.');

        await veiculo.destroy();
    }

    async exibir(id) {
        const veiculo = await Veiculo.findByPk(id);

        if(!!veiculo === false)
            throw new Error('Não encontramos um veiculo com este identificador.');

        return veiculo;
    }
}

module.exports = new VeiculoService();