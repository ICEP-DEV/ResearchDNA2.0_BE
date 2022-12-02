const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');
const Supervisor = require('./supervisorModel');
const Tools = sequelize.define('tool',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },

    video:{
        type: Sequelize.STRING,
        allowNull: false,
    }
    
} );
User.hasOne(Tools,{onDelete: 'RESTRICT',foreignKey:'userId'})
Tools.belongsTo(User)
Supervisor.hasOne(Tools,{onDelete: 'RESTRICT',foreignKey:'supervisorId'})
Tools.belongsTo(Supervisor)

module.exports = Tools;