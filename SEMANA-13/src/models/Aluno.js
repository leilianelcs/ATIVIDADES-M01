const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const {hash} = require('bcryptjs')  

const Aluno = connection.define('alunos', {
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.DATE,
    },
    celular: {
        type: DataTypes.STRING,
    }
})

Aluno.beforeSave(async (user) => {
        user.password = await hash(user.password, 6)
        return user
})

module.exports = Aluno



