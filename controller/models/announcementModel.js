const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Announcement = sequelize.define('announcement',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },

    text:{
        type: Sequelize.STRING,
        allowNull: false,
    }

    
} );

module.exports = Announcement;