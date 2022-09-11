
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Projects = sequelize.define('projects',{
    userId:{
        type: Sequelize.INTEGER,
    
        primaryKey: true,
        allowNull: false,
       
    },

    UserName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    Code:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Description:{
        type: Sequelize.STRING,
        allowNull: false,
        
    }
    
} );

module.exports = Projects;