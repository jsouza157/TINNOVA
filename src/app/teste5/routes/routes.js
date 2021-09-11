var express = require('express');
var route = express.Router();
const VeiculoController = require('../controllers/VeiculoController.js');

route.get('/', VeiculoController.listar);
route.post('/cadastrar', VeiculoController.cadastrar);
route.patch('/atualizar/:id', VeiculoController.atualizar);
route.delete('/excluir/:id', VeiculoController.excluir);
route.get('/exibir/:id', VeiculoController.exibir);

module.exports = route