const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Curso = connection.define('cursos', {
    nome: {
        type: DataTypes.STRING,
    },
    duracao_horas: {
        type: DataTypes.DATE,
    }
})

module.exports = Curso
