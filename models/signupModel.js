const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Signup = sequelize.define('user',{
    userId:{
        type: Sequelize.INTEGER,
    
        primaryKey: true,
        allowNull: false,
       
    },

    firstName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    department:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
     faculty:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }

    
} );

module.exports = Signup;