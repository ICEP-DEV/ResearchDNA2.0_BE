const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');
const Supervisor = require('./supervisorModel');
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

User.hasOne(DocTools,{onDelete: 'RESTRICT',foreignKey:'userId'})
DocTools.belongsTo(User)
Supervisor.hasOne(DocTools,{onDelete: 'RESTRICT',foreignKey:'supervisorId'})
DocTools.belongsTo(Supervisor)

module.exports = DocTools;