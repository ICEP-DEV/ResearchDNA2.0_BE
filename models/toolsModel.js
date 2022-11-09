const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Tools = sequelize.define('tool',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },

    video:{
        type: Sequelize.STRING,
        allowNull: false,
    }
    
} );

module.exports = Tools;