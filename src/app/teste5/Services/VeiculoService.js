const sequelize = require('../config/database.js');
const Veiculo = require('../models/Veiculo.js');

class VeiculoService {
    constructor()
    {
        this.marcas = ['FIAT', 'VOLKSWAGEN', 'RENAULT', 'PEUGEOT', 'NISSAN', 'HONDA', 'TOYOTA'];
    }

    async cadastrar(dados) {
        this._validarMarca(dados.marca.toUpperCase());
        const novoVeiculo = await Veiculo.create(dados);
        return novoVeiculo;
    }

    async listar(filtro) {
        var veiculos;
        switch(filtro) {
            case 'nao-vendidos':
                veiculos = await Veiculo.findAll({
                    where: {
                        vendido: false
                    }
                }).count();
              break;
            case 'por-fabricante':
                veiculos = await Veiculo.findAll({
                    attributes: [
                        'marca',
                        [sequelize.fn('COUNT', sequelize.col('marca')), 'total']
                      ],
                      group: 'marca'
                });
              break;
            default:
            veiculos = await Veiculo.findAll();
        }
        return veiculos;
    }

    async atualizar(id, veiculo, marca, ano) {
        this._validarMarca(marca.toUpperCase());
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

    _validarMarca(marca) {
        if(!this.marcas.includes(marca)) {
            throw new Error('Esta marca não pode ser cadastrada');
        }
    }
}

module.exports = new VeiculoService();