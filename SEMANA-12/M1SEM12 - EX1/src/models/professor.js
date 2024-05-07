const { Model, DataTypes } = require('sequelize');

class Professor extends Model {}

Professor.init({
  nome: DataTypes.STRING,
  materia: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Professor'
});

module.exports = Professor;