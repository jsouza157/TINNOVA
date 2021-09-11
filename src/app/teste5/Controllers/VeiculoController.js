const VeiculoService = require('../services/VeiculoService.js');
const _VeiculoService = require('../services/VeiculoService.js');

class VeiculoController {
    async cadastrar(req, res) {
        try { 
            const novoVeiculo = await _VeiculoService.cadastrar(req.body);
            return res.status(201).json(novoVeiculo);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id;
            const {veiculo, marca, ano} = req.body;
            const veiculoAtualizado = await _VeiculoService.atualizar(id, veiculo, marca, ano);
            return res.status(201).json(veiculoAtualizado);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    async excluir(req, res) {
        try {
            const id = req.params.id;
            await VeiculoService.excluir(id);
            return res.status(204).json({});
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    async listar(req, res) {
        try {
            const veiculos = await _VeiculoService.listar();
            return res.status(200).json(veiculos);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    async exibir(req, res) {
        try {
            const id = req.params.id;
            const veiculo = await _VeiculoService.exibir(id);
            return res.status(200).json(veiculo);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = new VeiculoController();