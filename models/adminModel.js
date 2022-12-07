const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Admin = sequelize.define('admin',{
    adminId:{
        type: Sequelize.INTEGER,
    
        primaryKey: true,
        allowNull: false,
       
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    

    
} );

module.exports = Admin;