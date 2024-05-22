const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Matricula = connection.define('matriculas', {
    aluno_id: {
        type: DataTypes.STRING,
    },
    curso_id: {
        type: DataTypes.STRING,
    }
})

module.exports = Matricula
