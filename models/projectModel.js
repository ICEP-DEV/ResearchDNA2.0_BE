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

    text:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    
    description:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    
    startDate:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    endDate:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    document:{
        type: Sequelize.STRING,
        allowNull: true,
    }


    
} );

//FOREIGN KEY DECLARATIONS
User.hasOne(Project, {onDelete: 'RESTRICT',foreignKey: 'userId'});
Project.belongsTo(User);

module.exports = Project;