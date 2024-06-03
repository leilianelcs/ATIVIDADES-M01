const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const {hash} = require('bcryptjs')  


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


Professor.beforeSave(async (user) => {
    user.password = await hash(user.password, 6)
    return user
})


module.exports = Professor
