const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Feedback = sequelize.define('feedback',{
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

module.exports = Feedback;