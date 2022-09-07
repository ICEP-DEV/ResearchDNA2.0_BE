const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Signup = sequelize.define('signup',{
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
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }

    
} );

module.exports = Signup;