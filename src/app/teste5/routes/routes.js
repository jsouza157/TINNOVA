var express = require('express');
var route = express.Router();
const VeiculoController = require('../controllers/VeiculoController.js');

route.get('/veiculos', VeiculoController.listar);
route.get('/veiculos/find', VeiculoController.listarComFiltro);
route.get('/veiculos/:id', VeiculoController.exibir);
route.post('/veiculos', VeiculoController.cadastrar);
route.patch('/veiculos/:id', VeiculoController.atualizar);
route.delete('/veiculos/:id', VeiculoController.excluir);

module.exports = route