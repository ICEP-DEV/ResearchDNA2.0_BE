
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const student = sequelize.define('student',{

    userId:{
        type: Sequelize.INTEGER,
    
        primaryKey: true,
        allowNull: false,
       
    },

    firstName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    surName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Qualification:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    
     faculty:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
   
} );

module.exports = student;