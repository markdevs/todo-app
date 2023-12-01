const {Sequelize, DataTypes} = require('sequelize');
const {v4: uuidv4} = require('uuid');
const sequelize = require('../database/mysql-connection')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        allowNull:false,
        primaryKey: true
    },
    firstName:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    lastName:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type:DataTypes.STRING(256),
        unique:true,
        allowNull: false,
    },
    password:{
        type:DataTypes.STRING(256),
        allowNull: false,
    },
   
})

module.exports = User