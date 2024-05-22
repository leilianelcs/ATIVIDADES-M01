const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Professor = connection.define('professores', {
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
    },
    materia: {
        type: DataTypes.STRING,
    }
})

module.exports = Professor
