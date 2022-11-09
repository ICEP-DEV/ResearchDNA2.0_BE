const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const DocTools = sequelize.define('documentTool',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },

    document:{
        type: Sequelize.STRING,
        allowNull: false,
    }
    
} );

module.exports = DocTools;