const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const login = sequelize.define('login',{
    userId:{
        type: Sequelize.INTEGER,
    
        primaryKey: true,
        allowNull: false,
    },

    UserName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }

    
} );

module.exports = login;