const sequelize = require('../config/database.js');
const { Model, DataTypes } = require('sequelize');

class Veiculo extends Model {}

Veiculo.init({
    veiculo : {
        type : DataTypes.STRING
    },
    marca : {
        type : DataTypes.STRING
    },
    ano: {
        type: DataTypes.INTEGER
    },
    descricao : {
        type: DataTypes.TEXT
    },
    vendido: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'Veiculo'
});

module.exports = Veiculo;