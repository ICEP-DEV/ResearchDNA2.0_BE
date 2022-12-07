const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');
const Project = sequelize.define('project',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },
    firstName:{
        type: Sequelize.STRING,
        
    },
    
    lastName:{
        type: Sequelize.STRING,
      
    },

    text:{
        type: Sequelize.STRING,
        
    },
    
    description:{
        type: Sequelize.STRING,
        
    },
    
    startDate:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    
  
   


    
} );

//FOREIGN KEY DECLARATIONS
User.hasOne(Project, {onDelete: 'RESTRICT',foreignKey: 'userId'});
Project.belongsTo(User);

module.exports = Project;